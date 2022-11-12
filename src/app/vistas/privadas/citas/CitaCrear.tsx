import { useState, useContext, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer } from "react-toastify";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import Cita from "../../../modelos/Cita";
import Perfil from "../../../modelos/Perfil";
import Usuario from "../../../modelos/Usuario";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import { ContextoUsuario } from "../../../seguridad/ContextoUsuario";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { useFormulario } from "../../../utilidades/misHooks/useFormulario";
import { MensajeToastify } from "../../../utilidades/funciones/MensajeToastify";


export const CitaCrear = () => {
  
  // Info del usuario en sesión
  const miUsuario = useContext(ContextoUsuario);
  const correoUsuario = String(miUsuario?.autenticado.correo);
  const codUsuario = String(miUsuario?.autenticado.codUsuario);
  // *******************************************************************
  
  
  
  
  
  // Esperar carga de datos
  const [todoListo, setTodoListo] = useState<boolean>(false);
  let cargaFinalizada = todoListo !== false;
  // *******************************************************************
  
  
  
  
  
  // Variables
  const fechaVacia = new Date();
  const usuarioVacio = new Usuario( "", "", "", "", fechaVacia, 1, "", "", new Perfil("", "", 1) );


  registerLocale("es", es);
  const [startDate, setStartDate] = useState(null);
  

  type formaHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [arregloMedicos, setArregloMedicos] = useState<Usuario[]>([]);
  let { codMedico, dobleEnlace, objeto } = useFormulario<Cita>( new Cita(codUsuario, usuarioVacio, usuarioVacio, fechaVacia, 1) );
  // *******************************************************************
  
  
  
  
  
  
  // Obtener los médicos para mostrar en el combo
  const obtenerMedicos = async () => {
    const urlMedicos = ApiBack.USUARIOS_OBTENER + "/63682c4240f3cbc1cb481082";
    const resultado = await ServicioPrivado.peticionGET(urlMedicos);
    setArregloMedicos(resultado);

    if (resultado) {
      setTodoListo(true);
    }
  };
  // ************************************************************************
  
  
  
  
  
  
  
// Función flecha para limpiar cajas
  const limpiarCajas = (formulario: HTMLFormElement) => {
    formulario.reset();
    setStartDate(null);
    formulario.codMedico.value = "";
    formulario.classList.remove("was-validated");
  };
// *******************************************************************





  // Crear la cita
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
      objeto.codPaciente._id = codUsuario;
      console.log(objeto);
      const resultado = await ServicioPrivado.peticionPOST( ApiBack.CITAS_CREAR, objeto );

      if (resultado.id) {
        setEnProceso(false);
        MensajeToastify("success", "Cita creada con éxito", 7000);
      } else {
        MensajeToastify("error", "No se puede crear la cita", 7000);
      }

      limpiarCajas(formulario);
    }
  };
// *******************************************************************






// Hook para cargar los médicos al renderizar el componente
  useEffect(() => {
    obtenerMedicos();
  }, []);
// *******************************************************************

    return (
      <main id="main" className="main">
        {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Citas</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Crear cita</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de formulario: Inicio */}
      <div className="col-lg-12">
        {cargaFinalizada ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Formulario de creación</h5>

              <Form
                noValidate
                validated={enProceso}
                onSubmit={enviarFormulario}
              >
                <div className="mb-3 row">
                  <label className="col-sm-3">
                    <span className="text-success">Cita para:</span>
                  </label>
                  <div className="col-sm-9">
                    <strong>{correoUsuario}</strong>
                  </div>
                </div>

                <Form.Group as={Row} className="mb-3" controlId="codMedico">
                  <Form.Label column sm={3}>
                    <span className="text-success">
                      <small>Seleccione el médico:</small>
                    </span>
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Select
                      size="sm"
                      required
                      name="codMedico"
                      value={codMedico._id}
                      onChange={dobleEnlace}
                    >
                      <option value="">Seleccione el médico</option>
                      {arregloMedicos.map((miMed, indice) => (
                        <option key={indice} value={miMed._id}>
                          {miMed.nombreUsuario}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>

                <div className="mb-3 row">
                  <label className="col-sm-3">
                    <span className="text-success">
                      <small>Fecha y hora de la cita:</small>
                    </span>
                  </label>
                  <div className="col-sm-4">
                    <DatePicker
                      required
                      selected={startDate}
                      onChange={(fechaSeleccionada: any) => {
                        setStartDate(fechaSeleccionada);
                        objeto.fechaCita = fechaSeleccionada;
                      }}
                      isClearable
                      showTimeSelect
                      locale="es"
                      dateFormat="dd/MM/yyyy h:mm aa"
                      timeIntervals={20}
                      timeCaption="Hora"
                      className="form-control form-control-sm"
                      minTime={new Date(0, 0, 0, 7, 0)}
                      maxTime={new Date(0, 0, 0, 18, 0)}
                      excludeTimes={[
                        new Date(0, 0, 0, 5, 0),
                        new Date(0, 0, 0, 6, 0),
                      ]}
                      includeDateIntervals={[
                        {
                          start: new Date(
                            new Date().getTime() - 1 * 24 * 60 * 60 * 1000
                          ),
                          end: new Date(
                            new Date().getTime() + 6 * 24 * 60 * 60 * 1000
                          ),
                        },
                      ]}
                      id="fechaCita"
                    />
                  </div>
                </div>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Registrar la cita</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        ) : (
          <div>Esperano carga de información</div>
        )}
      </div>
      {/* Ejemplo de formulario: Inicio */}

      {/* Requerido para presentar los mensajes Toast: Inicio */}
      <ToastContainer />
      {/* Requerido para presentar los mensajes Toast: Fin */}
      </main>
    );
  };