import { Link } from "react-router-dom";
import logoReact from "./../../../assets/image/logoReact.png";
import "./../../../assets/css/we.css";


export const Nosotros = () => {
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
                                        <a className="nav-link" href="/contacto">
                                            Contactanos
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item, tm-link left">
                                    <Link to="/nosotros">
                                        <a className="nav-link" href="/nosotros">
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



        <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">ACERCA DE NOSOTROS</span>
                            <h2>Emprendimiento <p>Mintic/UIS 2022</p></h2>
                        </div>
                        <div className="text">Somos un grupo de emprendedores del area de programacion,
                         fielmente comprometidos con la visión de un mismo emprendimiento aplicando principios
                          y competencias como por ejemplo: liderazgo, innovación, adaptación, etc. 
                          Con estas ganas de adquirir capacidades y estar expuestos a constantes retos
                          que beneficien nuestro crecimiento intelectual que como fijado principal tengamos
                          las siguientes metas a desarrollo.</div>
                        <ul className="list-style-one">
                            <li>FrontEnd</li>
                            <li>BackEnd</li>
                            <li>FullStack</li>
                        </ul>
                        <div className="btn-box">
                            <a href="/contacto" className="theme-btn btn-style-one">Contactanos</a>
                        </div>
                    </div>
                </div>


                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                        <figure className="image-1"><a href="/#" className="lightbox-image" data-fancybox="images"><img alt="Pp1" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/programacion-javascript-2640901.jpg" /></a></figure>
                        <figure className="image-2"><a href="/#" className="lightbox-image" data-fancybox="images"><img alt="pp2" src="https://lms.uis.edu.co/mintic2022/pluginfile.php/1/theme_edumy/headerlogo1/1663168415/MisionTIC-UIS.png"/></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    

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


