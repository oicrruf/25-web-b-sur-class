// crear un arreglo con diferentes platillos (max5)
let platillos = [
  "Memela", //0
  "Tostada",//1
  "Garnacha",//2
  "Tamal",//3
  "Picadillo"//4
]

// 1.- Mediante un ciclo for, muestra todos los platillos
// for(i=0; i<platillos.length; i+=1){
//     console.log(platillos[i]);
// }

// 2.- Mediante for e if, muestra solo dos platillos Tostada y tamal
for (let i = 0; i < platillos.length; i++) {
  if (i == 1 || i == 3) {
    console.log(platillos[i]);
  }
}



// 3.- Mediante for e if, muestra solo los elementos impares
// 4.- Mediante un ciclo for, muestra los elementos que sean pares


