const express = require('express');
const router = express.Router();

//import the vehicles array
const vehicles = require('../data/vehicles');
let counter = vehicles.length;

//VEHICLES
router.get('/vehicles', (req, res) => {
    res.json(vehicles);
})
router.get('/vehicles/:id', (req, res) => {
	let vehicle = vehicles.find(v => v._id === req.params.id);
    res.json(vehicle);
})
router.post('/vehicles', (req, res) => {
	let newVehicle = req.body;
	newVehicle._id = counter + 1;
	vehicles.push(newVehicle);
	res.json(newVehicle);
})

module.exports = router;