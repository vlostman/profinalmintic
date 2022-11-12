
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Usuario from "../../../modelos/Usuario";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import ServicioPrivado from "../../../servicios/ServicioPrivado";
import { obtenerFechaLocal, obtenerHora, } from "../../../utilidades/funciones/FormatoFecha";

export const UsuarioListado = () => {
  // ************************************************************************
  const [arregloUsuarios, setArregloUsuarios] = useState<Usuario[]>([]);
  // ************************************************************************

  // ************************************************************************
  const obtenerUsuarios = async () => {
    const resultado = await ServicioPrivado.peticionGET( ApiBack.USUARIOS_OBTENER );
    setArregloUsuarios(resultado);
  };
  // ************************************************************************

  // ************************************************************************
  useEffect(() => {
    obtenerUsuarios();
  }, []);
  // ************************************************************************

  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Usuarios</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de usuarios</li>
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
                  <th className="text-center" style={{ width: "8%" }}> Nro </th>
                  <th style={{ width: "40%" }}>Usuario</th>
                  <th style={{ width: "16%" }}>Creación</th>
                  <th style={{ width: "20%" }}>Perfil</th>
                  <th className="text-center" style={{ width: "10%" }}>
                    Estado
                  </th>
                  <th style={{ width: "6%" }}> </th>
                </tr>
              </thead>
              <tbody>
                {arregloUsuarios.map((miUsu, indice) => (
                  <tr key={indice}>
                    <td className="text-center align-middle">
                      <small>{indice + 1}</small>{" "}
                    </td>
                    <td>
                      {miUsu.nombreUsuario}
                      <br />
                      <small className="text-muted">
                        {miUsu.correoUsuario}
                      </small>
                    </td>
                    <td>
                      {obtenerFechaLocal(miUsu.fechaRegistroUsuario)}
                      <br />
                      <small className="text-muted">
                        {obtenerHora(miUsu.fechaRegistroUsuario)}
                      </small>
                    </td>
                    <td className="align-middle">
                      {miUsu.codPerfil.nombrePerfil}
                    </td>
                    <td
                      className={
                        miUsu.estadoUsuario === 1
                          ? "text-center align-middle text-success"
                          : "text-center align-middle text-danger"
                      }
                    >
                      <small>
                        {miUsu.estadoUsuario === 1 ? "Activo" : "Inactivo"}{" "}
                      </small>
                    </td>
                    <td className="text-center align-middle">
                      <Link to={"/dashboard/detailuser/"+miUsu._id}>
                        <i className="fa-solid fa-magnifying-glass fa-sm"></i>
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
