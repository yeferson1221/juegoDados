/**
* @fileoverview contiene las apis donde podemos consumir sea eliminar, guardar,
                actualizar o listar del ganador
* @author Yeferson Valencia
* @version 0.1
*/
/**
* 
*/
//--------


const express = require('express');
const routerWinner = express.Router();
const winnerPlayerController = require('../controllers/winnerPlayerControllers');

//api/ganadores
routerWinner.post('/', winnerPlayerController.crearWinnerPlayer);
routerWinner.get('/', winnerPlayerController.obtenerWinnerPlayers);
routerWinner.get('/:id', winnerPlayerController.obtenerWinnerPlayer);
routerWinner.delete('/:id', winnerPlayerController.eliminarWinnerPlayer);

module.exports = routerWinner;