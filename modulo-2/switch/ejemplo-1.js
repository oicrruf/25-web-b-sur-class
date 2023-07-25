let respuesta = prompt("Si seleccionas 1, te voy a saludar. Si seleccionas 2, me voy a despedir");
console.log("Recbiste un: ", typeof respuesta);

respuesta = parseInt(respuesta);
console.log("Ahora tienes un: ", typeof respuesta);

switch (respuesta) {
  case 1:
    alert("Hola!!!");
    break;
  case 2:
    alert("Adios!!");
    break;
  default:
    alert("Aprende a leer, crack");
    break;
};