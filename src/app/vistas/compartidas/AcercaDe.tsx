import fotoTripulante from "../../../assets/image/acercade.png";
import "./../../../assets/css/styles.css";


export const AcercaDe = () => {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Acerca de ...</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/dashboard">Inicio</a>
                        </li>
                        <li className="breadcrumb-item active">Listado de tripulantes</li>
                    </ol>
                </nav>
            </div>

            <div className="mt-4">
                <div className="card-group">
                    <div className="card">
                        <img src={fotoTripulante} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">David Munive</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Kelly Ibarra Flechas</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jeffrey Jimenez</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jaime Mantilla</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jesus Gtierrez</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            



            

        </main>
    );
};