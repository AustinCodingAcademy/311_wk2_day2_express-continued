const vehicles = require("../data/vehicles");


exports.list = function (request, response) {
  return response.json(vehicles);
}

exports.show = function (req,res) {
  let id = vehicles.find(i => i._id == req.params.vehicleId);
  res.json(id)
}

exports.create = function (req,res) {
  let newVehicle = req.body;
  vehicles.push(newVehicle)
  res.json(newVehicle)
}