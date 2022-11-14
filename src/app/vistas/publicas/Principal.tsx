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

import icon1 from "./../../../assets/image/icon1.png";

import avat1 from "./../../../assets/image/kelly.jpg";
import avat2 from "./../../../assets/image/Jeffrey.jpg";

export const Principal = () => {
  return (
    <div>
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
                        Medicina Interna
                      </a>
                      </li>
                    <li>
                      
                      <a className="dropdown-item" href="/#">
                      <Link to="/odontologia">
                        Odontologia
                      </Link>
                      </a>
                    </li>
                  <li>
                      <a className="dropdown-item" href="/#">
                        Medicina Interna
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Medicina General
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Cirugia Estetica
                      </a>
                      {/* Menu dropdown improvisaado*/}
                      {/* <div className="dropdown-divider"></div>
                      <select className="form-select" aria-label="Default select example">

                          <option selected>Odontologia</option>

                          <option value="1">Ortodoncia</option>
                          <option value="2">Rehabilitacion Oral</option>
                          <option value="3">Cirugia Oral</option>
                          <option value="3">Endodoncia</option>
                          <option value="3">Odontopediatria</option>
                      </select> */}
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
        <div className="pimg2">
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
          </div>

          <hr className="featurette-divider" />
        </div>
        
        {/* *************************************************************** */}
        {/* Cuerpo página principal: Fin */}

        {/* 22*************************************************************** */}
        <div className="container marketing">
        <div className="pimg1">
          
          {/**/}

<div id="container">
		<div className="product-details">
		<span className="hint free-shipping">Descripcion de Proyecto<p>TuDoctorOnline</p></span>
	<span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
    <i className="fa fa-star" aria-hidden="true"></i>
    <i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-half-o" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>
	</span>
  
		<p className="information">" TuDoctorOnline es una plataforma para el agendamiento de servicios médicos, permite a los usuarios
registrarse de manera gratuita y acceder al sistema de solicitud de citas médicas."</p>
<div className="control">
</div>
</div>
<div className="product-image">
<div className="info">
<li></li>
	<ul>
    <li><strong>Descripcion Tecnica</strong></li>
		<li><strong>Modulo: Desarrollo de Software U16. </strong>©2022</li>
		<li><strong>Grupo asignado: </strong>Grupo 10</li>
		<li><strong>Formador: : </strong>Carlos Andres Gutierrez</li>
		<li><strong>Tutor: </strong>Deiver Guerra</li>
		</ul>
</div>
</div>
</div>


          {/**/}
         
          </div>
          <hr className="featurette-divider" />
        </div>
        
        {/* 22*************************************************************** */}


        {/* 22*************************************************************** */}
        <div className="container marketing">
        <div className="pimg4">
          
          {/**/}
          <article className="flow">
  <h4>Nuestro Equipo de Desarrollo</h4>
  <p>Patronicados por Misión TIC 2022, operador Universidad industrial de Santander</p>
  <div className="team">
    <ul className="auto-grid">
      
      <li>
      <a href="https://github.com/vlostman" className="profile" target="_blank" rel="noopener noreferrer">
          <h2 className="profile__name">David Munive</h2>
          <p>Developer</p>
          <img alt="Profile" src="https://avatars.githubusercontent.com/u/36352567?v=4" />
        </a>
      </li>
      <li>
      <a href="https://github.com/kellyflechas" className="profile" target="_blank" rel="noopener noreferrer">
          <h2 className="profile__name">Kelly Ibarra Flechas</h2>
          <p>Developer</p>
          <img alt="Profile" src={avat1} />
        </a>
      </li>
      <li>
      <a href="https://github.com/jeffrey20122021" className="profile" target="_blank" rel="noopener noreferrer">
          <h2 className="profile__name">Jeffrey Jimenez</h2>
          <p>Developer</p>
          <img alt="Profile" src={avat2} />
        </a>
      </li>
      <li>
      <a href="https://swop.link/cool" className="profile" target="_blank" rel="noopener noreferrer">
          <h2 className="profile__name">Jaime Mantilla</h2>
          <p>Developer</p>
          <img alt="Profile" src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png" />
        </a>
      </li>
      
      <li>
        <a href="https://swop.link/cool" className="profile" target="_blank" rel="noopener noreferrer">
          <h2 className="profile__name">Jesus Gutierrez</h2>
          <p>Developer</p>
          <img alt="Profile" src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png" />
        </a>
      </li>
    </ul>
  </div>

  
</article>
          {/**/}

          </div>
          <hr className="featurette-divider" />
        </div>

        
        

        


        {/* 22*************************************************************** */}







        {/* Footer: Inicio */}
        {/* *************************************************************** */}
        <div>
        <a href="/#">
              <img src={icon1} alt=""/>
              </a>  
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
              <li><a href="/about">Acerca de Nosotros</a></li>
              <li><a href="/contacto">Contactanos</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
          <a href="/#">Grupo 10 - Tu Doctor Online</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="/#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </footer>

        {/* *************************************************************** */}
        {/* Footer: Fin */}
        </div>
      </main>
    </div>
  );
};

