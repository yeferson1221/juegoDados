const express = require('express');
const conectarDB = require('./configBD/bd');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/player', require('./routes/player'));
app.use('/api/winnerPlayer', require('./routes/winnerPlayer'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})