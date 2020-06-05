const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id)
  res.json(vehicle)
}

const create = (req, res) => {
  let newVehicleId = vehicles.length + 1;

  let newVehicle = {
    _id: newVehicleId,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  }

  vehicles.push(newVehicle)

  res.json(vehicles)
}

module.exports = { list, show, create }