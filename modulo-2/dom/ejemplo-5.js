let nombre = document.getElementById("nombre");

nombre.addEventListener("input", function (e) {
  console.log(e.target.value);
});

let titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover", function () {
  // console.log("lista de clases", titulo.classList);
  titulo.classList.remove("texto-azul");
  titulo.classList.add("texto-rojo");
});

titulo.addEventListener("mouseout", function () {
  titulo.classList.add("texto-azul");
  titulo.classList.remove("texto-rojo");
});

// TAREA MORAL

// 1. PEDIR AL USUARIO POR UN INPUT DE TEXTO DOS NUMEROS Y QUE IMPRIMA
// CUAL ES MAYOR

// 2. PEDIR UNA FRASE POR UN INPUT DE TEXTO E IMPRIMIR CUANTAS VECES
// APARECE EN ESA FRASE LA LETRA 'a'

// 3. CREAR UN CONVERTIDOS DE GRADOS CON EL DOM, CONVERTIR
// Grados Fahrenheit -> Celcius
// Celsius -> Kelvin
// Kelvin -> Fahrenheit