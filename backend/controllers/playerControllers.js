
/**
* @fileoverview contiene la logica para el agregar eliminar editar y buscar 
*               los jugadores deaqui solo se usa buscar en en frontend
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------

const Player = require("../models/Player");


exports.crearPlayer = async (req, res) => {

    try {
        let player;

        // Creamos nuestro jugador
        player = new Player(req.body);

        await player.save();
        res.send(player);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPlayers = async (req, res) => {

    try {
        
        const player = await Player.find(); 
        res.json(player)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPlayer = async (req, res) => {

    try {
        const { name, tiro} = req.body;
        let player = await Player.findById(req.params.id);

        if(!player) {
            res.status(404).json({ msg: 'No existe el jugador' })
        }

        player.name = name;
        player.tiro = tiro;

        player = await Player.findOneAndUpdate({ _id: req.params.id },player, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerPlayer = async (req, res) => {

    try {
        let player = await Player.findById(req.params.id);

        if(!player) {
            res.status(404).json({ msg: 'No existe el jugador' })
        }
       
        res.json(player);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPlayer = async (req, res) => {

    try {
        let player = await Player.findById(req.params.id);

        if(!player) {
            res.status(404).json({ msg: 'No existe el jugador' })
        }
       
        await Player.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El jugador eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}