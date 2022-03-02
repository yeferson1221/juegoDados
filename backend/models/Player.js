/**
* @fileoverview contiene el esquema del jugador donde se le dice a mongo que resive 
                 y almacena en BD
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------

const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tiro: {
        type: Number,
        required: true
   
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('player', PlayerSchema);