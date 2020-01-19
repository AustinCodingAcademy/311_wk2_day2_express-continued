let vehicles = require("../data/vehicles");

// get - returns all
exports.list = function list(req, res) {
  return res.json(vehicles);
}

// get by id
exports.show = function show(req, res) {
  res.json(vehicles.find(vehicles => vehicles._id === parseInt(req.params._id))); 
}

// post 
exports.create = function create(req, res) {
    const newVehicle = {
      _id: ++counter,
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
    }; 
    vehicles.push(newVehicle);
    res.json(vehicles);
}

module.exports = { list, show, create }