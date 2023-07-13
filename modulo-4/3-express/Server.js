const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send('Hola mundo');
})


app.get('/Juan', (req,res) =>{
    res.json({message:'Hola Juan'});
})
app.listen(port, () =>{
    console.log(`escuchando desde el puerto ${port}`)
})