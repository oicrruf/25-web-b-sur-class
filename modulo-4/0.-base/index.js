const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(401).json({"message": "Server running"})
})

app.listen(8000)