const express = require('express')
const app = express()

//Importar Conexion Mongo db 
const archivoDB = require('./config/conexionDB')


// Importacion del archivo de rutas y el modelo de usuarios
const rutaUsuario = require('./routes/usuarioRoutes')
const rutaProducto = require('./routes/productosRoutes')


// Importar Body.parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/usuarios', rutaUsuario)
app.use('/productos', rutaProducto)


app.get('/', (req, res) => {
    res.end('servidor')
})

//Configuracion server Basico

app.listen(3001, function () {
    console.log('Servidor Corriendo')
})