//1. DECLARAMOS UNA FUNCION
// NOS SIRVEN PARA ALMACENAR CODIGO REUTILIZABLE
function saludar() {
  return "Hola Mundo!";
};

// 2. EJECUTAMOS LA FUNCION/INVOCAR LA FUNCION/LLAMAR LA FUNCION
console.log(saludar());

// PIDO PARAMETROS - PARAMETRO ES LO QUE PIDO
// UNA FORMA DE CREAR ESTA FUNCION
// function sumaDosNumeros(primerNumero, segundoNumero) {
//   let resultadoDeLaSumaDeDosNumeros = primerNumero + segundoNumero;
//   return resultadoDeLaSumaDeDosNumeros;
// }

// OTRA FORMA DE HACERLO. MAS DIRECTA
function sumaDosNumeros(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
};

// RECIBEN ARGUMENTOS - ARGUMENTO ES LO QUE RECIBO
console.log(sumaDosNumeros(3, 18));
console.log(sumaDosNumeros(9, 28));