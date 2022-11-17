
import { Link } from "react-router-dom";
import logoReact from "./../../../assets/image/logoReact.png";
import "./../../../assets/css/medinterna.css";



export const Medicinainterna = () => {
    return (
        <div>
            <main>
                {/* Barra de navegación: Inicio */}
                <header>
                    <nav className="navbar navbar-expand-md fixed-top bg-light">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand, textColor" >
                                <img src={logoReact} alt="" /> Tu Doctor Online
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
                                                    <Link to="/medicinageneral">
                                                        Medicina General
                                                    </Link>
                                                </a>
                                            </li>

                                            <li>

                                                <a className="dropdown-item" href="/#">
                                                    <Link to="/medicinainterna">
                                                        Medicina Interna
                                                    </Link>
                                                </a>
                                            </li>

                                            <li>

                                                <a className="dropdown-item" href="/#">
                                                    <Link to="/medicinaestetica">
                                                        Medicina estetica
                                                    </Link>
                                                </a>
                                            </li>

                                            <li>

                                                <a className="dropdown-item" href="/#">
                                                    <Link to="/odontologia">
                                                        Odontologia
                                                    </Link>
                                                </a>
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
                {/* Barra de navegación: Fin */}

                <h3>
                    <p className="container3">Medicina Interna</p>
                </h3>
                <img alt="mediimg" src="https://i0.wp.com/dimedinet.com/wp-content/uploads/2020/11/Dimedinet-Medicina_Interna-1.jpg?fit=900%2C501&ssl=1" className="container2" />
                <h4>
                    <div>
                        <p className="container0">
                            El especialista en Medicina Interna, brinda atención integral al
                            paciente, enfocándose en la prevención, estudio, diagnóstico,
                            tratamiento y rehabilitación de las enfermedades crónicas propias
                            del adulto y de las condiciones agudas, que no requieren de una
                            cirugía.
                        </p>
                    </div>
                </h4>

            </main>
        </div>
    );
};
