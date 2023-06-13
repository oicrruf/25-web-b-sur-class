class Pila {
    elementos = [];

    push = (elemento) =>{
        return this.elementos.push(elemento);
    }
    pop = () =>{
        return this.elementos.pop();
    }
    isempty = () => {
        return this.elementos.length === 0;
    }
    empty = () =>{
        return this.elementos.length = 0;
    }
    size = () =>{
        return this.elementos.length;
    }
}

const lista = new Pila();

// agregando elementos

lista.push('1');
lista.push('2');
lista.push('3');

console.log(lista.elementos);
console.log(lista.size());
console.log(lista.pop());
console.log(lista.size());