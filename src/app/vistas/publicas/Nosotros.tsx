import { Link } from "react-router-dom";
import "./../../../assets/css/styles.css";
import logoReact from "./../../../assets/image/logoReact.png";

export const Nosotros = () => {
    return (
        <main id="main" className="main">

            <header>
                <nav className="navbar navbar-expand-md fixed-top bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand, textColor" >
                            <img src={logoReact} alt="" /> Mintic 2022
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item, tm-link left">
                                    <a className="nav-link" aria-current="page" href="/">
                                        Inicio
                                    </a>
                                </li>
                                
                                <li className="nav-item, tm-link left">
                                    <Link to="/contacto">
                                        <a className="nav-link" href="/#">
                                            Contactanos
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item, tm-link left">
                                    <Link to="/nosotros">
                                        <a className="nav-link" href="/about">
                                            Nosotros
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown, tm-link left">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Servicios
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/#">
                                                Medicina General
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/#">
                                                Medicina Interna
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/#">
                                                Cirugia Estetica
                                            </a>
                                            {/* Menu dropdown improvisaado*/}
                                            <div className="dropdown-divider"></div>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Odontologia</option>
                                                <option value="1">Ortodoncia</option>
                                                <option value="2">Rehabilitacion Oral</option>
                                                <option value="3">Cirugia Oral</option>
                                                <option value="3">Endodoncia</option>
                                                <option value="3">Odontopediatria</option>
                                            </select>
                                            {/* Menu dropdown improvisaado*/}

                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <Link to="/login">
                                <span className="navbar-text">Iniciar Sesion</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>




            <div className="container marketing">
            <div className="container-fluid">

                {/**/}
                <article className="flow">
                    <h4>Nuestro Equipo de Desarrollo</h4>
                    <p>Equipo multidisciplinario desarrollador de aplicaciones Web</p>
                    Contamos con un buen equipo de trabajo con altas capacidades y desempeño,
                    mejorando la productividad. Y, nos ayuda como negocio a alcanzar nuestros
                    objetivos en un menor periodo de tiempo. Como equipo de trabajo, promovemos
                    el aprendizaje y colaboración entre cada integrante. Mantenendo un buen ambiente
                    laboral y trabajo en el bienestar de nuestros colaboradores. Ya que esto influye
                    en nuestra productividad, desempeño y motivación.
                    <div className="team">
                        <ul className="auto-grid">

                            <li>
                                <a href="https://github.com/vlostman" className="profile" target="_blank" rel="noopener noreferrer">
                                    <h2 className="profile__name">David</h2>
                                    <p>Developer</p>
                                    <img alt="Profile shot for Marc Dixon" src="https://avatars.githubusercontent.com/u/36352567?v=4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://swop.link/cool" className="profile" target="_blank" rel="noopener noreferrer">
                                    <h2 className="profile__name">Anonimo</h2>
                                    <p>Developer</p>
                                    <img alt="Profile shot for Marc Dixon" src="https://as01.epimg.net/epik/imagenes/2020/06/08/portada/1591619131_634844_1591619268_noticia_normal_recorte1.jpg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://swop.link/cool" className="profile" target="_blank" rel="noopener noreferrer">
                                    <h2 className="profile__name">Anonimo</h2>
                                    <p>Developer</p>
                                    <img alt="Profile shot for Marc Dixon" src="https://as01.epimg.net/epik/imagenes/2020/06/08/portada/1591619131_634844_1591619268_noticia_normal_recorte1.jpg" />
                                </a>
                            </li>

                            <li>
                                <a href="https://swop.link/cool" className="profile" target="_blank" rel="noopener noreferrer">
                                    <h2 className="profile__name">Anonimo</h2>
                                    <p>Developer</p>
                                    <img alt="Profile shot for Chad" src="https://as01.epimg.net/epik/imagenes/2020/06/08/portada/1591619131_634844_1591619268_noticia_normal_recorte1.jpg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                {/**/}

                </div>
            </div>

        </main>
    );
};


