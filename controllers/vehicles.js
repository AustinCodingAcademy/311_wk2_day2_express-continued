const vehicles = require("../data/vehicles.js");

const list = (req, res) => {
  return res.json(vehicles);
};

const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(vehicles[id]);
};

const create = (req, res) => {
  let counter = vehicles.length;
  let newVehicle = req.body;
  newVehicle._id = counter + 1;
  vehicles.push(newVehicle);
  return res.json(vehicles[newVehicle._id - 1]);
};

module.exports = {
  list,
  show,
  create,
};
