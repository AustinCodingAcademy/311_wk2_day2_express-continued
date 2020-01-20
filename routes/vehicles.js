const express = require('express')
const router = express.Router()
const productsController = require('../controllers/vehicles')

let vehiclesCounter = vehicles.length;



router.get("/vehicles", (req, res) => {
  res.json(vehicles);
})

router.get("/vehicles/:id", (req, res) => {
  const vehicle = vehicles.find((v) => v._id == req.params.id)
  res.json(vehicle);
})

router.post("/vehicles", (req, res) => {
  const newVehicle = req.body;
  vehiclesCounter = vehiclesCounter+1;
  newVehicle._id = vehiclesCounter;
  contacts.push(newVehicle);
  res.json(newVehicle);
})

module.exports = router