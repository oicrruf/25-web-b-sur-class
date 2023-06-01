const persona = new Object({
    nombre: 'Arturo',
    edad: 25,
    saludo: function(){
        console.log('Hola')
    }
})

Object.prototype.dimeAdios = function(){
    console.log('Adios')
}

const Elias = Object.create(persona)