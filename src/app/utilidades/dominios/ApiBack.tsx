
//Los puntos de entrada de backend deben ser iguales aqui 
const ApiBack = {
  URL_LOCAL: "http://localhost:3123",
  URL: "https://doctortestdeploy.herokuapp.com",
  
  CREAR_USUARIO: "/api/publica/usuario/crear",
  INICIAR_SESION: "/api/publica/usuario/iniciar",

  PERFILES_CREAR: "/api/privada/perfil/crear",
  PERFILES_OBTENER: "/api/privada/perfil/todos",
  PERFILES_ELIMINAR: "/api/privada/perfil/eliminar",
  PERFILES_OBTENER_UNO: "/api/privada/perfil/uno",
  PERFILES_ACTUALIZAR: "/api/privada/perfil/actualizar",

  USUARIOS_CREAR: "/api/privada/usuario/crear",
  USUARIOS_OBTENER: "/api/privada/usuario/todos",
  USUARIOS_OBTENER_UNO: "/api/privada/usuario/uno",
  USUARIOS_ELIMINAR: "/api/privada/usuario/eliminar",
  USUARIOS_ACTUALIZAR: "/api/privada/usuario/actualizar",

  CITAS_CREAR: "/api/privada/cita/crear",
  CITAS_OBTENER: "/api/privada/cita/todos",
};

export default ApiBack;