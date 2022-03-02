const mongoose = require('mongoose');

const WinnerPlayerSchema = mongoose.Schema({ 
    id: {
        type: String,
        required: true
   
    },
    
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

module.exports = mongoose.model('winnerPlayer', WinnerPlayerSchema);