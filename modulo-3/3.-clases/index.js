class Perro{
    constructor(peso,color, raza){
        this.peso = peso;
        this.raza = raza;
        this.color = color;
        this.patas = 4;
    }

    ladrar(){
        return 'Waaau'
    }
}

// instancia Perro

// const Chilaquil = new Perro("28", "Cafe", "Husky");
// console.log(Chilaquil);
// console.log(Chilaquil.ladrar())


class Persona{
    constructor(nombre,edad,RFC,sexo,peso,altura){
        this.nombre =  nombre
        this.edad = edad
        this.RFC = RFC
        this.sexo = sexo
        this.peso =peso
        this.altura = altura
    }

    calcularIMC(){

    }
    esMayorDeEdad(){

    }
}

class Cuenta{
    constructor(titular,saldoActual,retiro){
        this.titular = personaUno.nombre
        this.saldoActual = saldoActual
        this.retiro = retiro

    }
}


// instancia Persona
const personaUno = new Persona('Arturo',25,'ARTY6152','Masculino','75k','1.70cm')
console.log(personaUno)

// instancia cuenta

const cuentaUno =  new Cuenta(personaUno,'$500','$300')

console.log(cuentaUno)