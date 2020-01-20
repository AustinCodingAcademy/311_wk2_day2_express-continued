
const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
}

const show = (req, res) => {
  let vehicleId = parseInt(req.params.id);
  let thisVehicle = vehicles.find(vehicle => vehicle._id === vehicleId)
  res.json(thisVehicle);
}

const create = (req, res) => {
  let id = vehicles.length + 1
  let newVehicle = {
    _id: id,
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
  vehicles.push(newVehicle);
  res.json(vehicles);
}

module.exports = {
  list, show, create
}