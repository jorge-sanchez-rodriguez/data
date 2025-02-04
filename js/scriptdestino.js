let trabajador = document.getElementById("trabajador")
let btnvolver = document.getElementById("btnvolver");
let trabajadores = JSON.parse(localStorage.getItem("trabajadores"));



const encabezados = () => {
    let capaencabezado = document.createElement("p");

    let nombre = document.createElement("p");
    nombre.textContent = "Nombre:";
    nombre.className = "font-weight-bold";
    capaencabezado.appendChild(nombre);

    let apellidos = document.createElement("p");
    apellidos.textContent = "Apellidos:";
    apellidos.className = "font-weight-bold";
    capaencabezado.appendChild(apellidos);

    let direccion = document.createElement("p");
    direccion.textContent = "direccion:";
    direccion.className = "font-weight-bold";
    capaencabezado.appendChild(direccion);

    let correo = document.createElement("p");
    correo.textContent = "Correo:";
    correo.className = "font-weight-bold";
    capaencabezado.appendChild(correo);

    let web = document.createElement("p");
    web.textContent = "Web:";
    web.className = "font-weight-bold";
    capaencabezado.appendChild(web);

    trabajador.appendChild(capaencabezado);
}

trabajadores.map((untrabajador) => {
    let capatrabajador = document.createElement("p");
    encabezados()
    capatrabajador.className = "col-md-3 mb-3";
    let nombre = document.createElement("p");
    nombre.textContent = untrabajador.nombre;
    capatrabajador.appendChild(nombre);

    let apellidos = document.createElement("p");
    apellidos.textContent = untrabajador.apellidos;
    capatrabajador.appendChild(apellidos);

    let direccion = document.createElement("p");
    direccion.textContent = untrabajador.direccion;
    capatrabajador.appendChild(direccion);

    let correo = document.createElement("p");
    correo.textContent = untrabajador.correo;
    capatrabajador.appendChild(correo);

    let web = document.createElement("p");
    web.textContent = untrabajador.web;
    capatrabajador.appendChild(web);

    trabajador.appendChild(capatrabajador);
})


btnvolver.addEventListener("click", () => {
    console.log("llega")
    location.href = "./index.html"
})