import { useState, useEffect } from "react";
import { MensajeToastify } from "../../../utilidades/funciones/MensajeToastify";

import Cita from "../../../modelos/Cita";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { obtenerFechaLocal, obtenerHora, } from "../../../utilidades/funciones/FormatoFecha";
import { Link } from "react-router-dom";
// import Usuario from "../../../modelos/Usuario";
// import { Button, Modal } from "react-bootstrap";



export const CitaAdmin = () => {
  // Variables
  const [arregloCitas, setArregloCitas] = useState<Cita[]>([]);
  const [show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  // ************************************************************************
  const borrarCita = async (codigoCita: string) => {
    const urlBorrar = ApiBack.CITAS_ELIMINAR + "/" + codigoCita;
    const resultado = await ServicioPrivado.peticionDELETE(urlBorrar);
    console.log(resultado);
    if (typeof resultado.eliminado === "undefined") {
        MensajeToastify(
            "error",
            "No se puede eliminar cita",
            6000
        );
    } else {
        MensajeToastify("success", "Cita eliminada correctamente", 6000);
    }
    obtenerCitas();
};

  // Función para obtener perfiles
  const obtenerCitas = async () => {
    const resultado = await ServicioPrivado.peticionGET(ApiBack.CITAS_OBTENER);
    setArregloCitas(resultado);
    return resultado;
  };
  // ************************************************************************


  const obtenerEstado = (valor: number) => {
    let textoEstado = "";
    switch (valor) {
      case 1:
        textoEstado = "Pendiente";
        break;

      case 2:
        textoEstado = "Finalizada";
        break;
      case 3:
        textoEstado = "Cancelada";
        break;
      case 4:
        textoEstado = "No asistió";
        break;
      default:
        textoEstado = "No encontrado";
        break;
    }
    return textoEstado;
  };


  // Hook de react que se usa cuando se renderiza o pinta la página (vista)
  useEffect(() => {
    obtenerCitas();
  }, []);
  // ************************************************************************

  
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
            <li className="breadcrumb-item active">Listado de citas</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "10%" }}>
                    Nro
                  </th>
                  <th style={{ width: "20%" }}>Fecha cita</th>
                  <th style={{ width: "55%" }}>Paciente - Médico</th>
                  <th className="text-center" style={{ width: "15%" }}>
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {arregloCitas.map((miUsu, indice) => (
                  <tr key={indice}>
                    <td className="text-center">{indice + 1}</td>
                    <td>
                      {obtenerFechaLocal(miUsu.fechaCita)}
                      <br />
                      <small>{obtenerHora(miUsu.fechaCita)}</small>
                    </td>
                    <td>
                      <span className="text-success">Paciente:</span>{" "}
                      {miUsu.codPaciente.nombreUsuario}
                      <br />
                      <span className="text-primary">Médico:</span>{" "}
                      <small>{miUsu.codMedico.nombreUsuario}</small>
                    </td>
                    <td className="text-center">
                      <small>{obtenerEstado(miUsu.estadoCita)}</small>
                    </td>
                    <td className="text-center">
                                            {miUsu.estadoCita === 0 ? (
                                                <a
                                                    href="/#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setShow(true);
                                                        //setObjPer(miUsu);
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-trash-can"
                                                        style={{ color: "#990000" }}
                                                    ></i>
                                                </a>
                                            ) : (
                                                <i
                                                    className="fa-solid fa-trash-can"
                                                    style={{ color: "#908989" }}
                                                ></i>
                                            )}{" "}
                                            <Link to={"/dashboard/updatecita/" + miUsu._id}>
                                                <i
                                                    className="fa-regular fa-pen-to-square"
                                                    style={{ color: "#006600" }}
                                                ></i>
                                            </Link>
                                        </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};