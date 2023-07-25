//AMBITO GLOBAL
// CUANDO USAMOS "var", estas variables tienen un alcance
// global y pueden ser accedidas y modificadas desde cualquier parte del documento

// CUANDO USAMOS "let", CREAMOS VARIABLES QUE PUEDEN SER
// ACCEDIDAS DE FORMAL GLOBAL Y localStorage, HACIENDO UNA 
// DIFERENCIACION
let nombre = "Cinthya"

if (true) {
  // CUANDO USAMOS UNA ESTRUCTURA CON LLAVES, SE GENERA UN ALCANCE
  // LOCAL
  let nombre = "Enrique"
  console.log("Alcance Local" + nombre)
}

console.log("Alcance global" + nombre)