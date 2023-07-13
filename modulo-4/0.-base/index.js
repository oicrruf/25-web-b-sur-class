const express = require("express");
const app = express();
const port = 8000;

const alumnos = [
  { id: 1, name: "Anayeli Soto", score: 40 },
  { id: 2, name: "Efrén Jiménez", score: 50 },
  { id: 3, name: "Erika Hernández", score: 60 },
  { id: 4, name: "Elias Monrroy", score: 70 },
];

app.get("/", function (req, res) {
  res.status(200).json({ message: "Server running" });
});

app.get("/alumnos", function (req, res) {
  res.status(200).json(alumnos);
});

// http://localhost:8000/alumnos/notas?min=50&max=60
app.get("/alumnos/notas/", function (req, res) {
  console.log(req.query)
  res.status(200).json(alumnos);
});

app.get("/alumnos/:id", function (req, res) {
  let alumno = alumnos.filter(
    (alumno) => alumno.id === parseInt(req.params.id)
  );
  if (alumno.length !== 0) {
    res.status(200).json(alumno[0]);
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});





app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
