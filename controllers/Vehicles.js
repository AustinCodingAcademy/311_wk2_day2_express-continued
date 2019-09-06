const vehicles = require("../data/vehicles");

const show = (req, res) => {
  const found = vehicles.some(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No contact with the id of ${req.params.id}` });
  }
};
const list = (req, res) => res.json(vehicles);
const create = (req, res) => {
  res.send(req.body);
};

module.exports = { list, show, create };
