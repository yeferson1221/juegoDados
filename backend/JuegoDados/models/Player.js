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