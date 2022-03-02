
/**
* @fileoverview Libreria mongose guardada constante mongoose
*
* @author Yeferson Valencia
* @version 0.1
*/
/**
* Muestra la conexion a la BD con mongo, esta coneccion esta hecha desde el cluster
*  si se decia cambiar del cluster a local ir a variables.env
*/
//--------

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB