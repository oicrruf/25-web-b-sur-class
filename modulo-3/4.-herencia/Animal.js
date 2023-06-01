// Clase padre

class Animal{
    constructor(nombre){
        this.nombre = nombre
        this.patas = 0
        this.orejas = true

    }
    getNombre(){
        return this.nombre
    }
    
}

module.exports = Animal;