
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Bienvenida } from "../../contenedores/Bienvenida";
import { AcercaDe } from "../../vistas/compartidas/AcercaDe";
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado";

import { PerfilCrear } from "../../vistas/privadas/perfiles/PerfilCrear";
import { PerfilAdmin } from "../../vistas/privadas/perfiles/PerfilAdmin";
import { PerfilListado } from "../../vistas/privadas/perfiles/PerfilListado";
import { PerfilActual } from "../../vistas/privadas/perfiles/PerfilActual";

import { UsuarioCrear } from "../../vistas/privadas/usuarios/UsuarioCrear";
import { UsuarioListado } from "../../vistas/privadas/usuarios/UsuarioListado";
import { UsuarioDetalle } from "../../vistas/privadas/usuarios/UsuarioDetalle";
import { UsuarioAdmin } from "../../vistas/privadas/usuarios/UsuarioAdmin";
import { UsuarioActual } from "../../vistas/privadas/usuarios/UsuarioActual";

import { CitaCrear } from "../../vistas/privadas/citas/CitaCrear";
import { CitaListado } from "../../vistas/privadas/citas/CitaListado";

// Carga Lazy - Supenso
// ***********************************************************************************************
const cargando = (
    <div className="d-flex justify-content-center">
        <div className="mt-3">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
                Cargando información...
            </button>
        </div>
    </div>
);
// ***********************************************************************************************

const RecursoNoEncontrado = lazy(() => import("../../vistas/compartidas/NoEncontrado").then(() => ({ default: NoEncontrado, })));

const LazyBienvenida = lazy(() => import("../../contenedores/Bienvenida").then(() => ({ default: Bienvenida })));
const LazyAcercaDe = lazy(() => import("../../vistas/compartidas/AcercaDe").then(() => ({ default: AcercaDe, })));

const LazyPerfilListado = lazy(() => import("../../vistas/privadas/perfiles/PerfilListado").then(() => ({ default: PerfilListado })));
const LazyPerfilCrear = lazy(() => import("../../vistas/privadas/perfiles/PerfilCrear").then(() => ({ default: PerfilCrear })));
const LazyPerfilAdmin = lazy(() => import("../../vistas/privadas/perfiles/PerfilAdmin").then(() => ({ default: PerfilAdmin })));
const LazyPerfilActual = lazy(() => import("../../vistas/privadas/perfiles/PerfilActual").then(() => ({ default: PerfilActual })));

const LazyUsuarioListado = lazy(() => import("../../vistas/privadas/usuarios/UsuarioListado").then(() => ({ default: UsuarioListado })));
const LazyUsuarioCrear = lazy(() => import("../../vistas/privadas/usuarios/UsuarioCrear").then(() => ({ default: UsuarioCrear })));
const LazyUsuarioDetalle = lazy(() => import("../../vistas/privadas/usuarios/UsuarioDetalle").then(() => ({ default: UsuarioDetalle })));
const LazyUsuarioAdmin = lazy(() => import("../../vistas/privadas/usuarios/UsuarioAdmin").then(() => ({ default: UsuarioAdmin })));
const LazyUsuarioActual = lazy(() => import("../../vistas/privadas/usuarios/UsuarioActual").then(() => ({ default: UsuarioActual })));

const LazyCitaCrear = lazy(() => import("../../vistas/privadas/citas/CitaCrear").then(() => ({ default: CitaCrear })));
const LazyCitaListado = lazy(() => import("../../vistas/privadas/citas/CitaListado").then(() => ({ default: CitaListado })));

export const RuteoTablero = () => {
    return (
        <Suspense fallback={cargando}>
            <Routes>
                <Route path="/" element={<LazyBienvenida />} />
                <Route path="/about" element={<LazyAcercaDe />} />

                <Route path="/listprofiles" element={<LazyPerfilListado />} />
                <Route path="/addprofile" element={<LazyPerfilCrear />} />
                <Route path="/admprofile" element={<LazyPerfilAdmin />} />
                <Route path="/updateprofile/:codigo" element={<LazyPerfilActual />} />

                <Route path="/listusers" element={<LazyUsuarioListado />} />
                <Route path="/adduser" element={<LazyUsuarioCrear />} />
                <Route path="/detailuser/:codigo" element={<LazyUsuarioDetalle />} />
                <Route path="/admuser" element={<LazyUsuarioAdmin />} />
                <Route path="/updateuser/:codigo" element={<LazyUsuarioActual />} />

                <Route path="/addma" element={<LazyCitaCrear />} />
                <Route path="/listma" element={<LazyCitaListado />} />

                <Route path="*" element={<RecursoNoEncontrado />} />
            </Routes>
        </Suspense>
    );
};