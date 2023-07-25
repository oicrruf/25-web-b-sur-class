let txtNombre, añoNacimiento, edad, añoActual;

function capturarNombre(){
    txtNombre = document.getElementById('nombre');
    alert('Tu nombre es' + txtNombre.value);
}

function calcularEdad(){
    let fecha = new Date();// toma la fecha del ordenador
    añoNacimiento = Number(document.getElementById('fecha').value.slice(0,4));//slice hace una copia de la cadena original y toma los datos que le pidas con base a la posicion de 0 ... n
    
    añoActual = fecha.getFullYear(); //toma los datos completos de la fecha, h/m/s

    if(añoActual < añoNacimiento){
        alert('Elige un año de nacimiento valio');
    }
    else{
        edad = añoActual - añoNacimiento;

        document.getElementById('edad').innerText = 'Tu edad es:' + edad;
    }

}


document.getElementById('calcular').addEventListener('click', calcularEdad);


function cambiarColor(){
    document.getElementById('cuerpo').style.backgroundColor = '#b2dfdb';
}