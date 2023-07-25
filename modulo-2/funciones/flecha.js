// ARROW FUNCTION
//1.  LA FUNCION FLECHA, NOS DA UNA SINTAXIS MAS LIMPIA
// Y FACIL DE LEER

//2. SE ALMACENAN EN CONSTANTES O VARIABLES.

// 3. EN LAS FUNCIONES FLECHA, NO EXISTE EL OBJETO "this",
// POR LO TANTO NO PUEDEN SER USADAS PARA CREAR PROTOTIPOS
const saludar = () => {
  return "Hola Mundo!";
};

console.log(saludar());

// SHORT ARROW FUNCTION/FUNCION CORTA DE FLECHA
// REGLAS DE SINTAXIS EN ARROW FUNCTIONS
// - Si mi funcion solo retorna un valor, puedo quitar el "return" explicito, las llaves y hacer uso del return implicito 
const sumaDosNumeros = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
console.log(sumaDosNumeros(5, 78));


// SHORT ARROW FUNCTION CON UN PARAMETRO
// SI TIENES SOLO UN PARAMETRO, LE PUEDES QUITAR LOS PARENTESIS
const saludar2 = personaASaludar => `Hola ${personaASaludar}`;

console.log(saludar2("Arturo"));

