const vehicles = require("../data/vehicles");
let vehicleCounter = vehicles.length;

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.id;
  const foundVehicles = vehicles.find(vehicles => vehicles._id === Number(id));
  res.json(foundVehicles);
};

const create = (req, res) => {
  let newVehicle = {
    _id: vehicleCounter + 1,
    body: req.body.body,
    postId: 1
  };
  vehicles.push(newVehicle);
  res.json(newVehicle);
};

module.exports = {
  list,
  show,
  create
};
