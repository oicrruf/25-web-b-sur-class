// DEL 1 AL 20, ¿CUANTOS NUMEROS SON PARES?
var contador = 0

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    contador = contador + 1
    console.log(`${i} es par`);
  }
}

console.log(`Del 0 al 10, existen ${contador} numeros que son pares`);