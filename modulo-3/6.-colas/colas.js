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
