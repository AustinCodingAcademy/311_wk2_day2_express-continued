const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id)
  res.json(vehicle)
}

const create = (req, res) => {
  let newVehicleId = vehicle.length + 1;

  let newVehicle = {
    _id: newVehicleId,
  }

  vehicles.push(newVehicle)

  res.json(vehicles)
}

module.exports = { list, show, create }