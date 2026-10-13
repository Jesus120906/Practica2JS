//Act1
const urlActual = document.getElementById("info");
urlActual.textContent = window.location.href;

const navegador = document.getElementById("navegador");
navegador.textContent = window.navigator.userAgent;

const dimensiones = document.getElementById("dimensions");
dimensiones.textContent = window.innerWidth;


const idioma = document.getElementById("language");
idioma.textContent = window.navigator.language;


//Act2

function mostrarDimensiones() {
    const alto = window.innerHeight;
    const ancho = window.innerWidth;
    const anchovisible = window.outerWidth;
    const altovisible = window.outerHeight;

    alert(`Dimensiones de la ventana:\nAncho: ${ancho}px\nAlto: ${alto}px\nAncho visible: ${anchovisible}px\nAlto visible: ${altovisible}px`);
}

function volver() {
    window.history.back();
}

function Recargar() {
    window.location.reload();
}

function ejercicio4() {

   
}


function Abrir() {

    window.open("https://www.google.com", "_blank");
}

function Cerrar() {
    window.close();
}

function color() {

    let color = window.prompt("Introduce un color de fondo :");


    if (color == "rojo") {
        document.body.style.backgroundColor = "red";
    } else if (color == "azul") {
        document.body.style.backgroundColor = "blue";
    } else if (color == "verder") {
        document.body.style.backgroundColor = "green";
    } else if (color == "amarillo") {
        document.body.style.backgroundColor = "yellow";
    } else if (color == "negro") {
        document.body.style.backgroundColor = "black";
    } else if (color == "blanco") {
        document.body.style.backgroundColor = "white";
    }
}

function Saludar() {

    let nombre = window.prompt("Introduce tu nombre:");
    if (nombre === null || nombre === "") {
        alert("El nombre de usuario es nulo.");
    } else {
        alert(`Hola, ${nombre}`);
    }
}

function tamaño(){
   
    const ancho = window.innerWidth;

    if (ancho < 768) {
        alert("La ventana es Pequeña " + "" + ancho);
            

    } else {
        alert("La ventana es Grande " + "" + ancho);
    }
}