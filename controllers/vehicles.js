const vehicles = require("../data/vehicles");
let vehicleCounter = vehicles.length;

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.id;
  const vehicle = vehicles.find(vehicle => vehicle._id === Number(id));
  res.json(vehicle);
};

const create = (req, res) => {
  let newVehicle = {
    _id: (vehicleCounter += 1),
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    postId: 1
  };

  console.log(newVehicle);
  vehicles.push(newVehicle);
};

module.exports = {
  list,
  show,
  create
};
