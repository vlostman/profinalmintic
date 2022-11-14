import { MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

import perfilUsu from "../../assets/image/perfilUsuario.png";
import { ContextoUsuario } from "../seguridad/ContextoUsuario";
import { OcultarMenu } from "../utilidades/funciones/OcultarMenu";

export const MenuSuperior = () => {
    const navegacion = useNavigate();
    const miUsuario = useContext(ContextoUsuario);
    const correoUsuario = miUsuario?.autenticado.correo;

    let avatarUsuario = String(localStorage.getItem("avatarMintic"));

    const cerrarSesion = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        localStorage.removeItem("tokenMintic");
        navegacion("/login");
    };

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="/dashboard" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Tu Consultorio</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn" onClick={OcultarMenu}></i>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="/#">
                            <i className="bi bi-search"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="/#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">4</span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                Tienes 4 notificationes
                                <a href="/#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        Ver todo
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning"></i>
                                <div>
                                    <h4>Estados</h4>
                                    <p>Consulta</p>
                                
                                </div> 
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-x-circle text-danger"></i>
                                <div>
                                    <h4>Agendas</h4>
                                    <p>1 Nota</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-check-circle text-success"></i>
                                <div>
                                    <h4>Cambios</h4>
                                    <p>1 Notificacion</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-info-circle text-primary"></i>
                                <div>
                                    <h4>Horarios</h4>
                                    <p>1 Notificacion</p>
                                
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="dropdown-footer">
                                <a href="/#">Mostrar todas las notificaciones</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="/#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-chat-left-text"></i>
                            <span className="badge bg-success badge-number">3</span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                Tienes 3 Mensajes
                                <a href="/#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        Ver Todos
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="/#">
                                    <img
                                        src="assets/img/messages-1.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Maria Hudson</h4>
                                        <p>
                                            Pedido de cita
                                        </p>
                                        <p>4 hrs. antes</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="/#">
                                    <img
                                        src="assets/img/messages-2.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Anna Nelson</h4>
                                        <p>
                                            Cambio de Medicamentos
                                        </p>
                                        <p>6 hrs. antes</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="/#">
                                    <img
                                        src="assets/img/messages-3.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>
                                            Direccion
                                        </p>
                                        <p>8 hrs. antes</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="dropdown-footer">
                                <a href="/#">Mostrar todos los Mensajes</a>
                            </li>
                        </ul>
                    </li>

{/**/}


<li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="/#"
                            data-bs-toggle="dropdown"
                        >

<img
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = perfilUsu;
                                }}
                                src={avatarUsuario}
                                alt="Profile"
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                {correoUsuario}
                            </span>
                        </a>

                       

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                Notificaciones
                                <li>
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        Ver Todos
                                    </span>
                                </li>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <li>
                                    <img
                                        src="assets/img/messages-3.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h6>Usuario Registrado</h6>
                                        <h6>Full Stack</h6>
                                    </div>
                                </li>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    href="/dashboard/about"
                                    className="dropdown-item d-flex align-items-center"

                                >
                                    <i className="bi bi-person"></i>
                                    Mi Perfil
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    href="/#"
                                    className="dropdown-item d-flex align-items-center"

                                >
                                    <i className="bi bi-gear"></i>
                                    Configuracion
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a
                                    href="/#"
                                    className="dropdown-item d-flex align-items-center"
                                    onClick={cerrarSesion}
                                >
                                    <i className="bi bi-box-arrow-right"></i>
                                    Cerrar sesión
                                </a>
                            </li>
                        </ul>
                    </li>


{/**/}

                </ul>
            </nav>
        </header>
    );
};
