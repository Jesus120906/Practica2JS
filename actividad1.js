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