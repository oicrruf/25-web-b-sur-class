const Animal = require('./Animal');

class Gato extends Animal{
    constructor(nombre, edad, color, patas, orejas){
        super(nombre)
        this.pulgas = pulgas
        this.color = color
        this.patas = 4
        this.orejas = true

        }
        ronronear(){
            return 'rrrrrrrr'
        }
}

module.exports = Gato;