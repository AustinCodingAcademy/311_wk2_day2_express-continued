const express = require('express')
const router = express.Router()

const { vehicles } = require('../data/vehicles');
let vehiclesCounter = vehicles.length;

router.use((req, res, next) => {
  if(req.path === "/vehicles" && req.method === "GET") {
    return res.json(vehicles)
  }
  next()
})

router.get('/vehicles/:vehicleIds', (req, res) => {
  let vehicle = vehicles.find(p=>p._id == req.params.vehicleIds);

  res.json(vehicle)
})

router.post('/vehicles', (req, res) => {
  let vehicle = req.body;
  let newUserId = vehiclesCounter + 1;
  vehiclesCounter = vehiclesCounter + 1;

  req.body._id = newUserId;

  vehicles.push(vehicle);

  res.json({user: vehicle})
})

module.exports = router;