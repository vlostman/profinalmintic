import { Link } from "react-router-dom";
import logoReact from "./../../../assets/image/logoReact.png";
import Lipo from "./../../../assets/image/lipo.jpg";
import Botox from "./../../../assets/image/Botox.jpg";
import "./../../../assets/css/catalog.css";


export const Medicinaestetica = () => {
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

            
                <div className="catalogo">

                <h2 className="card-title pb-0 fs-4">Medicina Estetica</h2>

                <div>
          <hr className="featurette-divider" />
        </div>


                    <div className="card">
                        <img src={Lipo} alt="" />

                        <div className="card-body">
                            <h5 className="card-title">Liposucción</h5>
                            <p className="card-text">
                                La liposucción es un tipo de cirugía estética. Esta cirugía
                                retira el exceso de grasa para mejorar la apariencia corporal
                                y pulir los contornos corporales irregulares. Algunas veces,
                                este procedimiento se denomina contorneado corporal. La
                                liposucción puede servir para moldear las zonas por debajo del
                                mentón, el cuello, los pómulos, la parte superior de los
                                brazos, los senos, el abdomen, los glúteos, las caderas, los
                                muslos, las rodillas, las pantorrillas y los tobillos.
                            </p>
                            <a href="/#" className="btn btn-primary" id="boton-catalogo">
                                Más Informacion
                            </a>
                        </div>
                    </div>

                    <div>
          <hr className="featurette-divider" />
        </div>

                    <div className="card">
                        <img src={Botox} alt="" />

                        <div className="card-body">
                            <h5 className="card-title">Botox</h5>



                            <p className="card-text">
                                La toxina botulínica, más conocida como botox (la marca
                                del primer medicamento de este tipo que se comercializó), es
                                en realidad la toxina que produce el botulismo. Sin embargo,
                                se aprovecha su capacidad de producir parálisis muscular para
                                utilizarla con fines médicos en el tratamiento de ciertas
                                enfermedades neurológicas y en medicina estética para las
                                arrugas de expresión, que es por lo que más se la conoce.
                                Entre sus numerosas aplicaciones médicas destacan


                            </p>
                            <a href="/#" className="btn btn-primary" id="boton-catalogo">
                                Más información
                            </a>
                        </div>
                    </div>
                </div>
                <div>
          <hr className="featurette-divider" />
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

















