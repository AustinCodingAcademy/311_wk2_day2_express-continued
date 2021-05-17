const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));
const vehiclesController = require(("../controllers/vehicles"))

//Get Vehicles
router.get('/vehicles', vehiclesController.list)

//Get Vehicles by ID
router.get('/vehicles/:id', vehiclesController.show)

//post Vehicles
router.post('/products', vehiclesController.create)

module.exports = router