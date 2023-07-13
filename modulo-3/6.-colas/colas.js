class Colas {
    constructor(elemento){
     this.elemento=[];
     this.front=0;
     this.end=0;
    };
    //funcion agregar

    enqueue(data){
        this.elemento[this.end]=data;
        this.end++;
    };

    dequeue(){
        if (this.front===this.end) {
            return null;

        }
        const data = this.elemento[this.front];
        delete this.elemento[this.front];
        this.front--;
        return data;
    };

}

const cola = new Colas();

cola.enqueue(5);
cola.enqueue(10);
cola.enqueue(4);
cola.enqueue(1);

cola.dequeue();

console.log(cola.elemento);
console.log(cola.dequeue());
console.log(cola.elemento);

// function insertionSort(datos) {
//     for (let i = 1; i < datos.length; i++) {
//         let j = i - 1;
//         let auxiliar = datos[i];

//         while (j >= 0 && datos[j] > auxiliar) {
//             datos[j + 1] = datos[j];
//             --j;
//         }

//         datos[j + 1] = auxiliar;
//     }

//     return datos;
// }

// let primos = [13, 19, 5, 3, 7, 11, 23];
// console.log(primos);

// console.log();

// let resultado = insertionSort(primos);
// console.log(resultado);