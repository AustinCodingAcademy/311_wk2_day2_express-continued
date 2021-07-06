const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  let item = vehicles.find((vehicle) => vehicle._id == req.params.id);
  res.json(item);
};

const create = (req, res) => {
  let counter = vehicles.length + 1;

  let newVehicle = {
    "_id": req.body.counter,
    "imgUrl": req.bosy.imgUrl,
    "year": req.body.year,
    "make": req.body.make,
    "model": req.body.model,
    "price": req.body.price,
    "km": req.body.km,
    "miles": req.body.miles,
    "fuel": req.body.fuel,
    "city": req.body.city,
    "isNew": req.body.isNew
  }

  vehicles.push(req.body);
};

module.exports = { list, show, create }