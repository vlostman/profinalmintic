
// ************************************************************************
export const obtenerFechaLocal = (fecha: Date | string) => {
    const fechaLista = new Date(fecha);
    return fechaLista.toLocaleDateString();
};
// ************************************************************************


// ************************************************************************
export const obtenerHora = (fecha: Date | string) => {
    const fechaLista = new Date(fecha);
    return fechaLista.toLocaleTimeString();
};
  // ************************************************************************