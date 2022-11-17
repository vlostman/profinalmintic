import { Link } from "react-router-dom";
import logoReact from "./../../../assets/image/logoReact.png";
import ortodoncia from "./../../../assets/image/ortodoncia.png";
import rehabilitacionOral from "./../../../assets/image/rehabilitacionoral.png";
import cirugiaOral from "./../../../assets/image/cirugia oral.png";
import endodoncia from "./../../../assets/image/endodoncia.jpg";
import odontopediatria from "./../../../assets/image/Odontopediatria.png";

export const Odontologia = () => {
    return (
        <main id="main" className="main">
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

            <div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <div className="cirugiaOral">
                        <div className="card shadow-sm">
                            <img alt="co" src={cirugiaOral} />
                            <div>
                                <p className="container">
                                    cirugía oral es aquella que se realiza en la boca,
                                    conocida en odontología como cavidad oral. Se emplea
                                    en aquellos casos en los que se necesita realizar una
                                    elevación del seno maxilar o para promover la regeneración
                                    ósea. También cuando se llevan a cabo extracciones complejas
                                    o cirugías de la encía.


                                </p>
                            </div>


                        </div>
                    </div>
                    <div className="endodoncia">
                        <div className="card shadow-sm">
                            <img alt="en" src={endodoncia} />
                            <div>
                                <p className="container">
                                    Una endodoncia es un tratamiento dental, el cual
                                    consiste en la extracción o eliminación total de
                                    la pulpa de un diente. Posteriormente la cavidad
                                    es rellenada y sellada con un material de obturación
                                    inerte.

                                </p>
                            </div>


                        </div>
                    </div>

                    <div className="odontologiaPediatrica">
                        <div className="card shadow-sm">
                            <img alt="od" src={odontopediatria} />
                            <div>
                                <p className="container">
                                    La odontopediatria es la encargada del
                                    manejo odontológico integral del paciente
                                    pediátrico., responsable de la prevención,
                                    el diagnóstico y el tratamiento de las
                                    patologías bucales y del complejo maxilofacial,
                                    para brindar un manejo temprano de las mal oclusiones
                                    del niño.


                                </p>
                            </div>


                        </div>
                    </div>

                    <div className="ortodoncia">
                        <div className="card shadow-sm">
                            <img alt="or" src={ortodoncia} />
                            <div>
                                <p className="container_ort">
                                    La ortodoncia es una especialidad de la odontología
                                    que se encarga del estudio, prevención, y tratamiento
                                    de la posición de los dientes para alinearlos correctamente
                                    y de todos los problemas relacionados con la mordida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rehabilitacionOral">
                        <div className="card shadow-sm">
                            <img alt="re" src={rehabilitacionOral} />
                            <div>
                                <p className="container">
                                    La rehabilitación oral es una serie de procedimientos
                                    encaminados a la restauración de la función oral y su
                                    aspecto estético, con el fin de conseguir una armonía
                                    oral en los pacientes.


                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

                               {/* Footer: Inicio */}
            {/* *************************************************************** */}
            <div className="mini-footer">
            <footer className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>Acerca del Proyecto</h6>
                                <p className="text-justify">Grupo <i>Mintic y sus Programas de educacion</i> son una iniciativa para ayudar a los futuros programadores. Se enfoca en proporcionar educacion y crear personas más eficientes, ya que el código requiere ser entendido de forma simple. Ayudaremos a los programadores a desarrollar conceptos en diferentes lenguajes de programación que incluyen C, C++, Java, HTML, CSS, Bootstrap, JavaScript, Android, SQL y Algorithm.</p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Tecnologia Usada</h6>
                                <ul className="footer-links">
                                    <li><a href="https://es.reactjs.org/">React</a></li>
                                    <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScipt</a></li>
                                    <li><a href="https://nodejs.org/en/">Nodejs</a></li>
                                    <li><a href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a></li>
                                    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Links a la Pagina</h6>
                                <ul className="footer-links">
                                    <li><a href="/nosotros">Acerca de Nosotros</a></li>
                                    <li><a href="/contacto">Contactanos</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                                    <a href="/#"> Grupo 10 - Tu Doctor Online</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="/#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="twitter" href="/#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="/#"><i className="fab fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="/#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
</div>
                {/* *************************************************************** */}
                {/* Footer: Fin */}

        </main>
    );
};
