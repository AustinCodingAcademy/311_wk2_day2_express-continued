const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles);
};
const show = (req, res) => {
  let vehicle = vehicles.find(item => item._id == req.params.id);
  if (vehicle)
    res.json(vehicle);
  else
    res.status(400).send(`There is no vehicle with id: ${req.params.id}`);
};
const create = (req, res) => {
  let newID = vehicles.length + 1;
  req.body._id = newID;
  req.body.postID = 1;
  vehicles.push(req.body);
  res.json(vehicles);
};

module.exports = { list, show, create };