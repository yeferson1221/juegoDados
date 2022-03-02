/**
* @fileoverview contiene las apis donde podemos consumir sea eliminar, guardar,
                actualizar o listar del jugador
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------

// Rutas para jugador
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerControllers');


// api/jugadores
router.post('/', playerController.crearPlayer);
router.get('/', playerController.obtenerPlayers);
router.put('/:id', playerController.actualizarPlayer);
router.get('/:id', playerController.obtenerPlayer);
router.delete('/:id', playerController.eliminarPlayer);


module.exports = router;