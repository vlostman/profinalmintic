import { Link } from "react-router-dom";

import "./../../../assets/css/portada.css";
import "./../../../assets/css/carousel.css";

import logoReact from "./../../../assets/image/logoReact.png";
import quienesSomos from "./../../../assets/image/quienesSomos.png";
import patrocinio from "./../../../assets/image/patrocinio.png";
import tecnologias from "./../../../assets/image/tecnologias.png";

import fondo01 from "./../../../assets/image/fondo01.png";
import fondo02 from "./../../../assets/image/fondo02.png";
import fondo03 from "./../../../assets/image/fondo03.png";
import fondo04 from "./../../../assets/image/fondo04.png";

export const Principal = () => {
  return (
    <div>
      {/* Barra de navegación: Inicio */}
      <header>
        <nav className="navbar navbar-expand-md fixed-top bg-light">
          <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
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
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Consultas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Contactanos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/about">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item dropdown">
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
                        Odontologia
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
                      </li>
                      </ul>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Odontologia
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        Ortodoncia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Rehabilitacion Oral
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Cirugia Oral
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Endodoncia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Odontopediatria
                      </a>
                    </li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                  </li> */}
              </ul>
              <Link to="/login">
              <span className="navbar-text">Iniciar sesión</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Barra de navegación: Fin */}

      <main>
        {/* Carousel: Inicio */}
        {/* *************************************************************** */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={fondo01} alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Medicina General</h1>
                  <p>Atencion Integral a la mano</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/login">
                      Entrar
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo02} alt="" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Medicina especializada</h1>
                  <p>Tu vida es lo primero</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/login">
                      Entrar
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo03} alt="" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Somos</h1>
                  <p>Aliados para proteger la salud de nuestros usuarios</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/login">
                      Entra
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={fondo04} alt="" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Mesa de ayuda</h1>
                  <p>Estamos para ayudarte</p>
                  <p>
                    <a className="btn btn-sm btn-primary" href="/login">
                      Entra
                    </a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* *************************************************************** */}
        {/* Carousel: Fin */}


        {/* Cuerpo página principal: Inicio */}
        {/* *************************************************************** */}
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={quienesSomos}
                className="bd-placeholder-img rounded-circle"
                alt=""
                style={{width: "100px", height: "auto"}}
              />

              <h2 className="fw-normal">¿Quienes somos?</h2>
              <p>Equipo multidisciplinario desarrollador de aplicaciones Web</p>
              <p>
                <a className="btn btn-secondary" href="/#">
                  Más detalles
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src={patrocinio}
                className="bd-placeholder-img rounded-circle"
                alt=""
                style={{width: "145px", height: "auto"}}
              />

              <h2 className="fw-normal">¿Nuestro patrocinio?</h2>
              <p>
                Patronicados por Misión TIC 2022, operador Universidad industrial de Santander
              </p>
              <p>
                <a className="btn btn-secondary" href="/#">
                  Más detalles
                </a>
              </p>
            </div>
            <div className="col-lg-4">
            <img
                src={tecnologias}
                className="bd-placeholder-img rounded-circle"
                alt=""
                style={{width: "170px", height: "auto"}}
              />
              <h2 className="fw-normal">¿Tecnologías?</h2>
              <p>
                Desarrollo de aplicaciones Web: Mongo, Express, React y Node
              </p>
              <p>
                <a className="btn btn-secondary" href="/#">
                  Más detalles
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
        {/* *************************************************************** */}
        {/* Cuerpo página principal: Fin */}


        {/* Footer: Inicio */}
        {/* *************************************************************** */}
        <div>
          <footer className="container">
            <p className="float-end">
              <a href="/#">Inicio página</a>
            </p>
            <p>
              Desarrollo de Software U16 ©2022 .<br />Grupo asignado: Grupo 10<br />Formador: Carlos Andres Gutierrez<br />Tutor: Deiver Guerra<br />
            </p>
          </footer>
        </div>
        {/* *************************************************************** */}
        {/* Footer: Fin */}
      </main>
    </div>
  );
};

