
//Los puntos de entrada de backend deben ser iguales aqui 
const ApiBack = {
  URL: "http://localhost:3123",
  URL_LOCAL: "https://doctortestdeploy.herokuapp.com",
  
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
  CITAS_ELIMINAR:"/api/privada/cita/eliminar",
  CITAS_ACTUALIZAR:"/api/privada/cita/actualizar",
};

export default ApiBack;