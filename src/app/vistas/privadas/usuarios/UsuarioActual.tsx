import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import Perfil from "../../../modelos/Perfil";
import Usuario from "../../../modelos/Usuario";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import noFoto from "../../../../assets/image/acercade.png";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { useFormulario } from "../../../utilidades/misHooks/useFormulario";
import { MensajeToastify } from "../../../utilidades/funciones/MensajeToastify";
import { ConvertirBase64 } from "../../../utilidades/funciones/ConvertirBase64";

export const UsuarioActual = () => {
  // Variables
  let { codigo } = useParams();
  const [avatarBase64, setAvatarBase64] = useState<string>("");
  const [imagenMiniatura, setImagenMiniatura] = useState(noFoto);
  const [nombreimagenTempo, setNombreimagenTempo] = useState<string>("");

  const [todoListo, setTodoListo] = useState<boolean>(false);
  let cargaFinalizada = todoListo !== false;

  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [arregloPerfiles, setArregloPerfiles] = useState<Perfil[]>([]);
  // *******************************************************************

  // Hook para formulario
  let {
    nombreUsuario,
    correoUsuario,
    estadoUsuario,
    nombreImagenUsuario,
    avatarUsuario,
    codPerfil,
    dobleEnlace,
    objeto,
  } = useFormulario<Usuario>(
    new Usuario("", "", "", "", new Date(), 0, "", "", new Perfil("", "", 1))
  );
  // *******************************************************************

  // Consulta los datos de un usuario por su _id
  // *******************************************************************
  const obtenerUnUsuario = async () => {
    const urlCargarUnUsuario = ApiBack.USUARIOS_OBTENER_UNO + "/" + codigo;
    const usuRecibido = await ServicioPrivado.peticionGET(urlCargarUnUsuario);
    if (usuRecibido) {
      objeto.nombreUsuario = usuRecibido.nombreUsuario;
      objeto.correoUsuario = usuRecibido.correoUsuario;
      objeto.estadoUsuario = usuRecibido.estadoUsuario;
      // Input file es inmutable !!!. La siguiente linea no se puede habilitar
      // objeto.nombreImagenUsuario = usuRecibido.nombreImagenUsuario;
      objeto.avatarUsuario = usuRecibido.avatarUsuario;
      objeto.codPerfil = usuRecibido.codPerfil;

      if (usuRecibido) {
        setAvatarBase64(usuRecibido.avatarUsuario);
        setImagenMiniatura(usuRecibido.avatarUsuario);
        setNombreimagenTempo(usuRecibido.nombreImagenUsuario);
        setTodoListo(true);
      }
    }
  };
  // *******************************************************************

  // Obtener perfiles a mostrar en el combo
  const obtenerPerfiles = async () => {
    const resultado = await ServicioPrivado.peticionGET(
      ApiBack.PERFILES_OBTENER
    );
    setArregloPerfiles(resultado);
  };
  // ************************************************************************

  // Mostrar imagen en pantalla
  // *******************************************************************
  const mostrarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];
    setImagenMiniatura(URL.createObjectURL(imagen));
    dobleEnlace(e);
    const base64 = await ConvertirBase64(imagen);
    setAvatarBase64(String(base64));
  };
  // ************************************************************************

  // Actualizar el perfil
  // *******************************************************************
  const enviarFormulario = async (fh: formaHtml) => {
    fh.preventDefault();
    setEnProceso(true);
    const formulario = fh.currentTarget;
    formulario.classList.add("was-validated");

    if (formulario.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      objeto.avatarUsuario = avatarUsuario;
      objeto.avatarUsuario = avatarBase64;

      const urlActualizar = ApiBack.USUARIOS_ACTUALIZAR + "/" + codigo;
      const objetoActualizar = new Usuario(
        objeto._id,
        objeto.nombreUsuario,
        objeto.correoUsuario,
        "",
        new Date(),
        objeto.estadoUsuario,
        nombreImagenUsuario !== "" ? nombreImagenUsuario : nombreimagenTempo,
        objeto.avatarUsuario,
        objeto.codPerfil
      );
      const resultado = await ServicioPrivado.peticionPUT(
        urlActualizar,
        objetoActualizar
      );

      if (resultado.nuevo) {
        setEnProceso(false);
        MensajeToastify("success", "Usuario actualizado correctamente", 7000);
      } else {
        MensajeToastify(
          "error",
          "No se puede actualizar el usuario. Verifique el correo electrónico",
          7000
        );
      }
    }
  };
  // *******************************************************************

  // Hook para cargar información una vez renderizado el componente
  useEffect(() => {
    obtenerPerfiles();
    obtenerUnUsuario();
  }, []);
  // *******************************************************************
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Usuarios</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/dashboard/admuser">Administración de usuarios</Link>
            </li>
            <li className="breadcrumb-item active">Actualizar</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Formulario de creación</h5>

            {cargaFinalizada ? (
              <Form
                noValidate
                validated={enProceso}
                onSubmit={enviarFormulario}
              >
                <Form.Group as={Row} className="mb-3" controlId="nombreUsuario">
                  <Form.Label column sm={3}>
                    <span className="text-success">
                      <small>Nombre completo:</small>
                    </span>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      required
                      type="text"
                      name="nombreUsuario"
                      className="form-control"
                      value={nombreUsuario}
                      onChange={dobleEnlace}
                    />
                    <Form.Control.Feedback type="invalid">
                      Nombre completo del usuario
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="correoUsuario">
                  <Form.Label column sm={3}>
                    <span className="text-success">
                      <small>Correo electrónico:</small>
                    </span>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      required
                      type="text"
                      name="correoUsuario"
                      className="form-control"
                      pattern="[a-z0-9+_.-]+@[a-z]+\.[a-z]{2,3}"
                      value={correoUsuario}
                      onChange={dobleEnlace}
                    />
                    <Form.Control.Feedback type="invalid">
                      Correo inválido
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="estadoUsuario">
                  <Form.Label column sm={3}>
                    <span className="text-success">
                      <small>Estado usuario:</small>
                    </span>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      size="sm"
                      required
                      name="estadoUsuario"
                      value={estadoUsuario}
                      onChange={dobleEnlace}
                    >
                      <option value="">Seleccione el estado</option>
                      <option value={1}>Activo</option>
                      <option value={2}>Inactivo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el estado inicial del usuario
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="codPerfil">
                  <Form.Label column sm={3}>
                    <span className="text-success">
                      <small>Perfil del usuario:</small>
                    </span>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      size="sm"
                      required
                      name="codPerfil"
                      value={codPerfil._id}
                      onChange={dobleEnlace}
                    >
                      <option value="">Seleccione el perfil</option>
                      {arregloPerfiles.map((miPer, indice) => (
                        <option key={indice} value={miPer._id}>
                          {miPer.nombrePerfil}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Seleccione el perfil del usuario
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="nombreImagenUsuario"
                >
                  <Form.Label column sm={3}>
                    <div>
                      <span className="text-success">Foto actual: </span>
                      <span>
                        <small>{nombreimagenTempo}</small>
                      </span>
                    </div>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      size="sm"
                      accept="image/png, image/jpeg"
                      type="file"
                      name="nombreImagenUsuario"
                      className="form-control"
                      value={nombreImagenUsuario}
                      onChange={mostrarImagen}
                    />
                    <Form.Control.Feedback type="invalid">
                      Debe seleccionar un avatar para el usuario
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <div className="mb-3 row">
                  <div className="col-sm-3"></div>
                  <div className="d-flex justify-content-center col-sm-9">
                    <img
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noFoto;
                      }}
                      src={imagenMiniatura}
                      alt="Profile"
                      className="maximoTamanoCreacion"
                    />
                  </div>
                </div>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 9, offset: 3 }}>
                    <Button type="submit" className="btn btn-primary">
                      Actualizar usuario
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            ) : (
              <div>Cargando información de los perfiles</div>
            )}
          </div>
        </div>
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
    </main>
  );
};
