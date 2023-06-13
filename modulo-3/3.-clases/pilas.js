class Pila {
    #elementos = [];
    
    push = (elemento) => {
      return this.#elementos.push(elemento);
    }
    pop = () => {
      return this.#elementos.pop();
    }
    isempty = () => {
      return this.#elementos.length === 0;
    }
    empty = () => {
      this.#elementos.length = 0;
    }
    size = () => {
      return this.#elementos.length;
    }
  }

  const pila = new Pila();
pila.push('a');
console.log(Pila.elementos);