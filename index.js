const express = require('express')
const app = express()
const path = require('path')
const router = express.Router();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/nuevo-estudiante', function (req, res) {
    res.sendFile(path.join(__dirname+'/nuevo-estudiante.html'))
})


app.listen(3000)