const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json({"message": "Server running"})
})

app.listen(8000)