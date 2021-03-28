const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const findVehicles = vehicles.find(
    (vehicle) => vehicle._id === parseInt(req.params.id)
  );
  res.json(findVehicles);
};

const create = (req, res) => {
  let counter = vehicles.length + 1;
  let newVehicle = {
    ...req.body,
    postId: counter,
  };
  newVehicle._id = counter;
  vehicles.push(newVehicle);
  res.json({ msg: "New Contact Added!", vehicle: newVehicle });
};

module.exports = { list, show, create };
