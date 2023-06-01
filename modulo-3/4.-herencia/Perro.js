const Animal = require('./Animal');

class Perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre)
        this.edad = edad
        this.patas = 4
    }
    ladrar(){
        return 'Wuuaauu wuaauu'
    }
}

module.exports = Perro;