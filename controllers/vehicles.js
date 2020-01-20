const vehicles = require('../data/vehicles')
let vehicleCounter = vehicles.length;

const list = (req, res) => {
  res.json(vehicles)
  };

const show = (req, res) => {
  let idSearched = req.params.id
  const vehicle = vehicles.find(vehicle => 
  vehicle._id == idSearched)
  res.json(vehicle)
  };

const create = (req, res) => {
  let vehicle = req.body;
  vehicleCounter += 1
  vehicle._id = vehicleCounter
  vehicles.push(vehicle)
  res.json(vehicles)
  };




module.exports = { list, show, create }