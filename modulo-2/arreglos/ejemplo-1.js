// SQUARE BRACKETS = CORCHETES CUADRADOS
// const listaAleatoriaDeElementos = ["Hola mundo", 23, [1.3, 1.4, 1.6], true, null]

// SI QUIERO ACCEDER AL VALOR DE UN ELEMENTO EN PARTICULAR,
// TENGO QUE ESCOGERLO DE ACUERDO A SU POSICION Y CON AYUDA
// DE LA "NOTACION DE CORCHETES CUADRADOS" O SQUARE BRACKET NOTATION
// console.log(listaAleatoriaDeElementos[2]);


//1.- leer un arreglo de enteros sacar media.

const enteros = [2,3,5,6,12,22,30,32];


let promedio = (enteros) => {
    
    

    let sumaTotal = 0


for(i=0; i<enteros.length; i++){
    sumaTotal += enteros[i];
}

return sumaTotal/enteros.length;

}

console.log(promedio(enteros));

