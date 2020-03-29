const express = require('express');
const router = express.Router();

let vehicles = require("../data/vehicles");
let lastVehiclesId = vehicles.length;


router.get('/vehicles', (req, res) => {
    res.json(vehicles);
});

router.get('/vehicles/:id', (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle);
});

router.post('/vehicles', (req, res) => {
    let newEntry = req.body;
    let newId = lastVehiclesId++;
    newEntry._id = newId;
    vehicles.push(newEntry);
});

module.exports = router;