const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicles')

router.get('/vehicles', vehicleController.vehiclesList)

router.get('/vehicles/:id', vehicleController.vehiclesListById)

router.post('/vehicles', vehicleController.createVehicle)

module.exports = router;