const vehicles = require('../data/vehicles')
let counter = vehicles.length;


 module.exports.list = (req, res) => {
  return res.json(vehicles)
}

module.exports.show = (req,res) => {
  let getVehicle = users.find(getVehicle => getVehicle._id === parseInt(req.params.id))
  res.json(getVehicle);
}

module.exports.create = (req,res) => {
  let createVehicle = req.body;
  vehicles.push(createVehicle);
  createVehicle._id = counter++;
  res.json(createVehicle)
}
