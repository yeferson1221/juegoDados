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