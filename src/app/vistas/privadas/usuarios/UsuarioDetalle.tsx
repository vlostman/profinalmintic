import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Usuario from "../../../modelos/Usuario";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import noFoto from "../../../../assets/image/acercade.png";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { obtenerFechaLocal, obtenerHora, } from "../../../utilidades/funciones/FormatoFecha";

export const UsuarioDetalle = () => {
  let { codigo } = useParams();
  const regresar = useNavigate();
  const [todoListo, setTodoListo] = useState<boolean>(false);
  let cargaFinalizada = todoListo !== undefined;
  const [objUsuario, setObjUsuario] = useState<Usuario>();

  useEffect(() => {
    // Consulta los datos de un usuario por su _id
    // *******************************************************************
    const obtenerUnUsuario = async () => {
      const urlCargarUnUsuario = ApiBack.USUARIOS_OBTENER_UNO + "/" + codigo;
      const usuRecibido = await ServicioPrivado.peticionGET(urlCargarUnUsuario);
      if (usuRecibido) {
        setObjUsuario(usuRecibido);
        setTodoListo(true);
      }
    };
    // *******************************************************************
    obtenerUnUsuario();
  }, [codigo]);

  return (
    <main id="main" className="main">
      {cargaFinalizada ? (
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Información del usuario</div>
              <div className="card-body">
                <h5 className="card-title">
                  Nombre: {objUsuario?.nombreUsuario}
                </h5>
                <p className="card-text">
                  Correo: {objUsuario?.correoUsuario}
                  <br />
                  Perfil: {objUsuario?.codPerfil.nombrePerfil}
                  <br />
                  Fecha creación:{" "}
                  {obtenerFechaLocal(String(objUsuario?.fechaRegistroUsuario))}
                  <br />
                  Hora creación:{" "}
                  {obtenerHora(String(objUsuario?.fechaRegistroUsuario))}
                  <br />
                  Estado:
                  <span
                    className={
                      objUsuario?.estadoUsuario === 1
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {objUsuario?.estadoUsuario === 1 ? "Activo" : "Inactivo"}
                  </span>
                  <br />
                  Nombre avatar: {objUsuario?.nombreImagenUsuario}
                  <br />
                  <img
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = noFoto;
                    }}
                    src={objUsuario?.avatarUsuario}
                    alt="Profile"
                    className="maximoTamanoCreacion"
                  />
                </p>
              </div>
              <div className="card-footer">
                <button
                  onClick={() => regresar(-1)}
                  className="btn btn-info btn-sm"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Carga de usuario en proceso</div>
      )}
    </main>
  );
};
