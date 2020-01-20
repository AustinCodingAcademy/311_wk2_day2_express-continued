const { vehicles } = require('../data/vehicles');
let vehiclesCounter = vehicles.length;

const list = (req, res) => res.json(vehicles);

const show =  (req, res) => {
  let vehicle = vehicles.find(p=>p._id == req.params.vehiclesIds);
  res.json(vehicle)
}

const create = (req, res) => {
  let vehicle = req.body;
  let newUserId = vehiclesCounter + 1;
  vehiclesCounter = vehiclesCounter + 1;

  req.body._id = newUserId;

  vehicles.push(vehicle);

  res.json({user: vehicle})
}

module.exports = {list, show, create}