import { Link } from "react-router-dom";
import "./../../../assets/css/portada.css";
import "./../../../assets/css/carousel.css";



import logoReact from "./../../../assets/image/logoReact.png";
import avat1 from "./../../../assets/image/kelly.jpg";
import avat2 from "./../../../assets/image/Jeffrey.jpg";




export const Principal = () => {
  return (
    <div>
      {/* Barra de navegación: Inicio */}

      <script src="./../../../assets/css/style2.js" type="text/javascript" />
      <header>
        {/* <nav className="navbar navbar-expand-md fixed-top bg-light">
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
        </nav> */}

<nav>
		<ul className="mcd-menu">
			<li>
				<a href="">
					<i className="bi bi-house"></i>
					<strong>Inicio</strong>
				</a>
			</li>
			<li>
				<a href="">
					<i className="bi bi-person"></i>
					<strong>Nosotros</strong>
				</a>
			</li>
			<li>
				<a href="">
					<i className="bi bi-telephone"></i>
					<strong>Contacto</strong>
				</a>
			</li>
			<li>
				<a href="">
					<i className="bi bi-newspaper"></i>
					<strong>Noticias</strong>
				</a>
			</li>
			<li>
				<a href="">
					<i className="bi bi-inboxes"></i>
					<strong>Servicios</strong>
				</a>
				<ul>
					<li><a href="/#"><i className="fa fa-globe"></i>Medicina General</a></li>
					<li>
						<a href="/#"><i className="fa fa-group"></i>Nuestro Equipo</a>
						<ul>
							<li><a href="/#"><i className="fa fa-male"></i>David Munive</a></li>
							<li>
								<a href="/#"><i className="fa fa-female"></i>Kelly Ibarra Flechas</a>
								<ul>
									<li><a href="/#"><i className="fa fa-leaf"></i>-</a></li>
									<li><a href="/#"><i className="fa fa-tasks"></i>-</a></li>
								</ul>
							</li>
							<li><a href="/#"><i className="fa fa-male"></i>Jeffrey Jimenez</a></li>
              <li><a href="/#"><i className="fa fa-male"></i>Jaime Mantilla</a></li>
						</ul>
					</li>
					<li><a href="/#"><i className="fa fa-trophy"></i>Rewards</a></li>
					<li><a href="/#"><i className="fa fa-certificate"></i>Certificates</a></li>
				</ul>
			</li>
			<li>
				<a href="">
					<i className="bi bi-calendar3"></i>
					<strong>Calendario</strong>
				</a>
			</li>
			<li>
				<a href="/login">
					<i className="bi bi-fingerprint"></i>
					<strong>Inicio de Sesion</strong>
				</a>
			</li>
			<li className="float">
				<a className="search">
					<input type="text" value="Busqueda ..."/>
					<button><i className="fa fa-search"></i></button>
				</a>
				<a href="" className="search-mobile">
					<i className="fa fa-search"></i>
				</a>
			</li>
		</ul>
	</nav>


      </header>
      {/* Barra de navegación: Fin */}

      <main>
        {/* Cuerpo página principal: Inicio */}
        {/* *************************************************************** */}

{/* Banner Inicio*/}
{/* *************************************************************** */}
<section>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" />
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet"/>


<div id="content-slider">
  <div className="slider-wrap"> 
    <input type="radio" id="input-1" name="i" />         
    <input type="radio" id="input-2" name="i" />         
    <input type="radio" id="input-3" name="i" />
    <input type="radio" id="input-4" name="i" />

    <nav className="slider-dot-control">
      <label htmlFor="input-1" className="slider-dot"></label>
      <label htmlFor="input-2" className="slider-dot"></label>
      <label htmlFor="input-3" className="slider-dot"></label>
      <label htmlFor="input-4" className="slider-dot"></label>
    </nav>

 
    <nav className="slider-arrow-control">
      <label htmlFor="input-1"></label>
      <label htmlFor="input-2"></label>
      <label htmlFor="input-3"></label>
      <label htmlFor="input-4"></label>
    </nav>

    <div className="slider">
      <div className="slider-inner">

        <figure>
          <figcaption className="slider-head">
            <h2>Atencion Inmediata</h2>
            <p>En cualquier momento</p>
            <a href="/#"></a>
          </figcaption>
          <img src="https://medic.freit.io/img/header%20image.png" alt="" id="i-1" className="slider-img"/>
        </figure>

        <figure>
          <figcaption className="slider-head">
            <h2>Servicios Disponibles</h2>
            <p>Multitud de areas</p>
            <a href="/#"></a>
          </figcaption>
          <img src="https://st2.depositphotos.com/1177973/7301/i/600/depositphotos_73012877-stock-photo-doctor-with-stethoscope-in-hospital.jpg" alt="" id="i-2" className="slider-img"/>
        </figure>

        <figure>
          <figcaption className="slider-head">
            <h2>Calidad de Atencion</h2> 
            <p>Costos comodos</p>
            <a href="/#"></a>
          </figcaption>
          <img src="https://st2.depositphotos.com/1000144/6901/i/600/depositphotos_69014957-stock-photo-blood-pressure-monitor-clipboard-and.jpg" alt="" id="i-3" className="slider-img"/>
        </figure>

        <figure>
          <figcaption className="slider-head">
            <h2>Informacion Oportuna</h2>
            <p>Siempre al dia</p>
            <a href="/#"></a>
          </figcaption>
          <img src="https://t4.ftcdn.net/jpg/03/25/07/11/360_F_325071193_ZD5XK2bsJBD2S1lyOUuIpyVYl2w5troJ.jpg" alt="" id="i-4" className="slider-img"/>
        </figure>


        <figure>
          <figcaption className="slider-head">
            <h2>Stearman PT-17</h2>
            <p>Lorem ipsum dolor.</p>
            <a href="#">read more...</a>
          </figcaption>
          <img src="https://images.unsplash.com/photo-1563782414411-b05969e9ebd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="" id="i-5" className="slider-img"/>
        </figure>               
      </div>
    </div>                  

  </div>        
</div>

</section>

{/* Banner FIn*/}
{/* *************************************************************** */}

{/* *************************************************************** */}
{/* CInformacion Inicio */}        

        <section className="py-2 mt-3"  id="menu">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h2 font-weight-light s-size text-center p-1">
                            BLOG INFORMATIVO
                        </p>
                        <p className="lead text-center">Primeras Noticias</p><hr className="bg-dark"/>
                    </div>
                </div>
                </div>


                <div id="mainbox">
<div className="card">
  <img className="img1" src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16" alt="" />
  <h1>Noticia 1</h1>
  <p>Casos de Viruela de Mono se intensifica en Colombia</p>
</div>
<div className="card">
  <img className="img1" src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16" alt="" />
  <h1>Noticia 2</h1>
  <p>Nuevo pico de Covid-19 en Colombia, otra ves a usar mascara?</p>
</div>
<div className="card">
  <img className="img1" src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16" alt="" />
  <h1>Noticia 3</h1>
  <p>Posibles nueva vacucaion masiva</p>
</div>
</div>
                

        </section>
        {/* Informacion Fin */}
        {/* *************************************************************** */}


        {/* *************************************************************** */}
        {/* Formulario de Contacto: Inicio */}
        <section id="service" className="mt-3 py-2 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h2 font-weight-light s-size text-center p-1">
                            <i className="bi bi-telephone"></i> CONTACTANOS
                        </p>
                        <p className="lead text-center">Danos Tu Opinion</p><hr className="bg-light"/>
                    </div>
                </div>
                <div className="row py-1">
                    <div className="col-md-6 mb-2">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nombres</label>
                                <input type="text" className="form-control" placeholder="Nombres"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Contacto</label>
                                <input type="text" className="form-control" placeholder="Su Numero de Contacto"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="details">Mensaje</label>
                                <textarea  id=""  className="form-control" placeholder="Escriba su mensaje aqui."></textarea>
                            </div>
                            <button className="btn btn-outline-light btn-block"><i className="far fa-paper-plane"></i> Enviar</button>
                        </form>
                    </div>
                    <div className="col-md-6 mb-2 pt-4 d-none d-md-block">
                        <div className="card">
                            <img src="https://definicion.de/wp-content/uploads/2010/07/contacto-1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* *************************************************************** */}
        {/* Formulario de Contacto: Fin */}


        {/* Footer: Inicio */}
        {/* *************************************************************** */}

        <footer className="footer">
          <div className="container">
            <ul className="list-inline mb-0 text-center">
              <li>
                <Link to="/nosotros">
                  Copyright 2022 All Rights Reserved by Desarrollo de Software Mintic/UIS - U16/Grupo 10 - Tu Doctor Online
                </Link>
              </li>
              <li className="list-inline-item">
                <a href="/#"><span className="fab fa-twitter"></span></a>
              </li>

              <li className="list-inline-item">
                <a href="/#"><span className="fab fa-dribbble"></span></a>
              </li>

              <li className="list-inline-item">
                <a href="/#"><span className="fab fa-facebook-f"></span></a>
              </li>

              <li className="list-inline-item">
                <a href="/#"><span className="fab fa-linkedin-in"></span></a>
              </li>
            </ul>
          </div>
        </footer>
        {/* *************************************************************** */}
        {/* Footer: Fin */}



      </main>
    </div>
  );
};

