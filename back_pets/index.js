console.log("Cargado Configuracion")
//Dependencia importada!!
const express = require('express')
console.log("Express Completa")

console.log("Iniciando app Web")
//Inicializa la app web (objeto del servidor)
const app = express()
console.log("Web iniciada")

//Se acostumbra a estar en mayusculas
const port = 3500;

console.log("Configurando routers")
//Conf de routers
app.get('/', 
    function (req, res) {
  res.send('La Aplicacion está lista en el puerto: ' + port +  1);
})
console.log("Routers Configurados...")


//Callback se ejecuta cuando el server está levantado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//añadimos la carpeta del frontend
app.use("/app", express.static("frontend"))
app.use("/static", express.static("frontend/static"))

console.log("hello word");