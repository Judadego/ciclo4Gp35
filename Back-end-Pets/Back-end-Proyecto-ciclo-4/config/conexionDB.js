const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ProyectoPetsShop')

const objetodb = mongoose.connection

objetodb.on('connected', () => { console.log('conexion exitosa') })
objetodb.on('error', () => { console.log('conexion fallida') })

module.exports = mongoose