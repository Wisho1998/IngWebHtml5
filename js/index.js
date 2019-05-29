console.log("conexión :D");

var canva = document.getElementById("canvasCarnet");
var lienzo = canva.getContext("2d");
var btn = document.getElementById("cargarDatos");

var fondo = {
    imagen: new Image(),
    cargaOk: false
};

var informacion = {
    nombre: "",
    apellido: "",
    facultad: "",
    carrera: "",
    dni: "",
    codigo: "",
    foto: new Image(),
    cargaOk: false
};

fondo.imagen.src = "img/carnet-universitario.png";
fondo.imagen.addEventListener("load", cargarFondo);

// informacion.imagen.src = "img/foto-carnet.png";
// btn.addEventListener("click", cargarDatosInputs);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

// function cargarDatosInputs() {

//     informacion.nombre = document.getElementById("nombre").value;
//     informacion.apellido = document.getElementById("apellido").value;
//     informacion.facultad = document.getElementById("facultad").value;
//     informacion.carrera = document.getElementById("carrera").value;
//     informacion.dni = document.getElementById("dni").value;
//     informacion.codigo = document.getElementById("codigo").value;
//     informacion.foto = document.getElementById("foto").value;
//     informacion.cargaOk = true;
//     dibujar();
// }

function dibujar() {
    lienzo.clearRect(0, 0, canva.width, canva.height);
    if (fondo.cargaOk) {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }
    if (informacion.cargaOk) {
        lienzo.font = "12px Arial";
        lienzo.fillText("Wilmer", 200, 180);
    }
}