const express = require('express');
const router = express.Router();
const vehicles = require('../data/vehicles');
let vehicleCounter = vehicles.length;


router.get('/', (req, res) => {
  res.json(vehicles)
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let vehicle = vehicles.find(vehicle => vehicle._id == id);
  res.json(vehicle);
});

router.post('/', (req, res)=> {
  vehicleCounter++
  let body = req.body;
  body._id = vehicleCounter;
  vehicles.push(body);
  res.json(body);
})

module.exports = router;