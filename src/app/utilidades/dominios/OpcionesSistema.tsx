//Menus para administrador e invitado - Se puede Modificar

const opcionesAdmin = [
    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
    {
        nombre: "Perfiles", icono: "bi bi-clipboard-data", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listprofiles", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
        ]
    },
    {
        nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listusers", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/adduser" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
        ]
    },
    {
        nombre: "Citas", icono: "bi bi-calendar", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listma", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addma" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admma", },
        ]
    }
];

// *********************************************************************************

const opcionesInvitado = [

    {
        nombre: "Servicios", icono: "bi bi-clipboard-data", ruta: "", hijos: [
            { nombre: "En Proceso", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
            { nombre: "Finalizado", icono: "bi bi-circle", ruta: "/dashboard/admuser" },
        ]
    },
    {
        nombre: "Citas", icono: "bi bi-calendar", ruta: "", hijos: [
            { nombre: "Pendiente", icono: "bi bi-circle", ruta: "/dashboard/listma", },
            { nombre: "Agendar Cita", icono: "bi bi-circle", ruta: "/dashboard/addma" },
            { nombre: "Cancelada", icono: "bi bi-circle", ruta: "/dashboard/admma", },
        ]
    },
    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
];
// *********************************************************************************

const opcionesMedico = [

    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
    {
        nombre: "Perfiles", icono: "bi bi-clipboard-data", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listprofiles", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
        ]
    },
    {
        nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listusers", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/adduser" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
        ]
    },
    {
        nombre: "Citas", icono: "bi bi-calendar", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listma", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addma" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admma", },
        ]
    }
];
// *********************************************************************************

const opcionesPaciente = [

    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/dashboard/about", hijos: [], },
    {
        nombre: "Perfiles", icono: "bi bi-clipboard-data", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listprofiles", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
        ]
    },
    {
        nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listusers", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/adduser" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
        ]
    },
    {
        nombre: "Citas", icono: "bi bi-calendar", ruta: "", hijos: [
            { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listma", },
            { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addma" },
            { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admma", },
        ]
    }
];

export { opcionesAdmin, opcionesInvitado, opcionesMedico, opcionesPaciente };