const express = require('express')
// const vehicles = require("../data/vehicles")
const vehicleRoutes = express.Router()
const vehicleController = require("../controllers/vehicles")

//route.get()
vehicleRoutes.get('/vehicles', vehicleController.list)

//route.get(/:userId`) 
vehicleRoutes.get('/vehicles/:userId', vehicleController.show)

//route.post()
vehicleRoutes.post('/vehicles', vehicleController.create)

module.exports = vehicleRoutes;