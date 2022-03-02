/**
* @fileoverview contiene la logica para el agregar eliminar editar y buscar 
*               los jugadores que ganen deaqui solo se usa buscar en en frontend
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------

const WinnerPlayer = require("../models/WinnerPlayer");


exports.crearWinnerPlayer = async (req, res) => {

    try {
        let winnerPlayer;

        // Creamos nuestro ganador
        winnerPlayer = new WinnerPlayer(req.body);

        await winnerPlayer.save();
        res.send(winnerPlayer);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerWinnerPlayers = async (req, res) => {

    try {
        
        const winnerPlayer = await WinnerPlayer.find(); // encontrar el  atributo  producto
        res.json(winnerPlayer)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerWinnerPlayer = async (req, res) => {

    try {
        let winnerPlayer = await WinnerPlayer.findById(req.params.id);

        if(!winnerPlayer) {
            res.status(404).json({ msg: 'No existe el jugador' })
        }
       
        res.json(winnerPlayer);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarWinnerPlayer = async (req, res) => {

    try {
        let winnerPlayer = await WinnerPlayer.findById(req.params.id);

        if(!winnerPlayer) {
            res.status(404).json({ msg: 'No existe el jugador' })
        }
       
        await WinnerPlayer.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El jugador eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}