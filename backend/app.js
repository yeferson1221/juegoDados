/**
* @fileoverview contiene el index central para montra el puerto y enlazar mis rutas
                o apis, tambien la BD
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------

const express = require('express');
const conectarDB = require('./configBD/bd');
//validar mis rutas
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
//de esta manera cada ruta uso cors
app.use(cors())

app.use(express.json());

//crenado la api  le agrego require('./routes/player') para solicitar la api que necesite
app.use('/api/player', require('./routes/player'));

//crenado la api  le agrego require('./routes/winnerPlayer') para solicitar la api que necesite
app.use('/api/winnerPlayer', require('./routes/winnerPlayer'));

// conel metodo listen pongo al sustema a escuchar por el puerto 4000
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})