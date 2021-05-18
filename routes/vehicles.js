const express = require('express');
const vehiclesRouter = express.Router();
const vehiclesController = require('../controllers/vehicles.js');


vehiclesRouter.get('/vehicles', vehiclesController.getAllVehicles);
vehiclesRouter.get('/vehicles/:id', vehiclesController.getVehicle);
vehiclesRouter.post('/vehicles', vehiclesController.postVehicle);

module.exports = vehiclesRouter;