let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let direccion = document.getElementById("direccion");
let correo = document.getElementById("correo");
let web = document.getElementById("web");
let enviar = document.getElementById("enviar");

const cargarDatosTrabajador = () => {
  let trabajador = {
    nombre: nombre.value,
    apellidos: apellidos.value,
    direccion: direccion.value,
    correo: correo.value,
    web: web.value,
  };

  //Si no es la primera vez obtnemos el array del LocalStorage para poder
  // añadir el nuevo valor, recuerda que puede haber sido modificado en otra pagina
  let trabajadoresStorage = JSON.parse(localStorage.getItem("trabajadores"));

  if (!trabajadoresStorage) trabajadoresStorage = [];

  trabajadoresStorage.push(trabajador);

  localStorage.setItem("trabajadores", JSON.stringify(trabajadoresStorage));
};

enviar.addEventListener("click", cargarDatosTrabajador);
