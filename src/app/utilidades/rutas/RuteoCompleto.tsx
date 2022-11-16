import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Principal } from "../../vistas/publicas/Principal";
import { InicioSesion } from "../../vistas/publicas/InicioSesion";
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion";
import { NoEncontrado } from "../../vistas//compartidas/NoEncontrado";
import { Nosotros } from "../../vistas/publicas/Nosotros";
import { Contacto } from "../../vistas/publicas/Contacto";
import { Odontologia } from "../../vistas/publicas/Odontologia";
import { Medicinageneral } from "../../vistas/publicas/Medicinageneral";
import { Medicinainterna } from "../../vistas/publicas/Medicinainterna";
import { Medicinaestetica } from "../../vistas/publicas/Medicinaestetica";

import { Vigilante } from "../../seguridad/Vigilante";
import UsuarioSesion from "../../seguridad/UsuarioSesion";
import { TableroPrincipal } from "../../contenedores/TableroPrincipal";


const LazyPrincipal = lazy(() => import("../../vistas/publicas/Principal").then(() => ({ default: Principal })));
const LazyInicio = lazy(() => import("../../vistas/publicas/InicioSesion").then(() => ({ default: InicioSesion, })));
const LazyRegistro = lazy(() => import("../../vistas//publicas/RegistroSesion").then(() => ({ default: RegistroSesion, })));
const LazyNoEncontrado = lazy(() => import("../../vistas//compartidas/NoEncontrado").then(() => ({ default: NoEncontrado, })));
const LazyNosotros = lazy(() => import("../../vistas/publicas/Nosotros").then(() => ({ default: Nosotros, })));
const LazyContacto = lazy(() => import("../../vistas/publicas/Contacto").then(() => ({ default: Contacto, })));
const LazyOdontologia = lazy(() => import("../../vistas/publicas/Contacto").then(() => ({ default: Odontologia, })));
const LazyMedicinageneral = lazy(() => import("../../vistas/publicas/Medicinageneral").then(() => ({ default: Medicinageneral, })));
const LazyMedicinainterna = lazy(() => import("../../vistas/publicas/Medicinainterna").then(() => ({ default: Medicinainterna, })));
const LazyMedicinaestetica = lazy(() => import("../../vistas/publicas/Medicinaestetica").then(() => ({ default: Medicinaestetica, })));


const LazyTablero = lazy(() => import("../../contenedores/TableroPrincipal").then(() => ({ default: TableroPrincipal, })));

export const RuteoCompleto = () => {
    return (
        <UsuarioSesion>
            <Routes>
                <Route path="/" element={<LazyPrincipal />} />
                <Route path="/login" element={<LazyInicio />} />
                <Route path="/register" element={<LazyRegistro />} />
                <Route path="/nosotros" element={<LazyNosotros />} />
                <Route path="/contacto" element={<LazyContacto />} />
                <Route path="/odontologia" element={<LazyOdontologia />} />
                <Route path="/medicinageneral" element={<LazyMedicinageneral />} />
                <Route path="/medicinainterna" element={<LazyMedicinainterna />} />
                <Route path="/medicinaestetica" element={<LazyMedicinaestetica />} />

                <Route element={<Vigilante />}>
                    <Route path="/dashboard/*" element={<LazyTablero />} />
                </Route>

                <Route path="*" element={<LazyNoEncontrado />} />
            </Routes>
        </UsuarioSesion>
    );
};