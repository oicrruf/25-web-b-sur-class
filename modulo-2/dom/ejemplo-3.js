// FORMAS DE LEER NODOS
let parrafo = document.getElementById("parrafo");

let segundoParrafo = document.getElementsByClassName("segundo-parrafo");
let todosLosSpan = document.getElementsByTagName("span");

console.log("primer parrafo", parrafo);

console.log("segundo parrafo", segundoParrafo);
console.log("todos los span", todosLosSpan);

// FORMA DE LEER NODOS, MAS GENERALISTA Y PODEROSA, TAMBIEN GASTA MAS RECURSOS/NO SUELE SER RELEVANTE

// SELECCIONA EL PRIMER ELEMENTO DE SU TIPO QUE ENCUENTRA
let titulo = document.querySelector(".titulo");
console.log("accediendo al titulo con .querySelector", titulo);

// SELECCIONA TODOS LOS ELEMENTOS DE SU TIPO QUE ENCUENTRA
// Y LOS ALMACENA EN ALGO LLAMADO LA NodeList, QUE NO ES UN ARREGLO PERO SE PUEDE CONVERTIR EN UNO
let todosLosTitulos = document.querySelectorAll(".titulo");
console.log("accediendo a todos los elementos con la clase .titulo", todosLosTitulos);