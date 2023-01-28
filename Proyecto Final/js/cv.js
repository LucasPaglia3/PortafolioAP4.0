/*
    Este bloque de codigo toma la altura de la barra de navegacion y la pone en la propiedad "scroll-padding" 
    para que cuando la pagina se mueva a distintas secciones siempre termine de scrollear en el punto perfecto.
    BUG: Si el scroll esta desplazado por muy poco, al hacer click en alguna seccion, hay que clickear 2 veces en la seccion para que scrollee. Intenté buscar en google como resolverlo pero no encontré respuesta.
*/
const navegacion = document.querySelector(".barranav-contenedor");
const alturaBarraNavegacion = navegacion.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", alturaBarraNavegacion + "px");

/* Boton en las cartas de los proyectos que cambia el texto del boton y abre una nueva pestaña en el navegador con el github de este proyecto. */

const boton = document.getElementById("btn-1");

boton.addEventListener("click", function hizocliick() {
    boton.textContent = "Gracias :)";
    window.open("https://github.com/LucasPaglia3/PortafolioAP4.0", "_blank");
})