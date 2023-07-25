// UN ARREGLO ES CONOCIDO COMO UNA REFERENCIA.
// SI MODIFICAS UNA PROPIEDAD, SE VA A MODIFICAR EL ARREGLO
// ORIGINAL COMPLETO. A ESTO SE LE CONOCE COMO PASO POR REFERENCIA
const frutas = ["Uva", "Manzana", "Pera"];
console.log("Arreglo antes de modificarlo", frutas);

frutas[1] = "Piña";

console.log(frutas[1]);
console.log("Arreglo despues de modificarlo", frutas);