const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles);
}

const show = (req, res) => {
  let id = req.params.id -1;
  if (!vehicles[id]) {
    res.send(`Vehicle id #${req.params.id} not found!`);
  } else {
    res.json(vehicles[id]);
  }
}

const create = (req, res) => {
  let counter = vehicles.length;
  req.body._id = counter +1;
  vehicles.push(req.body);
  res.json(vehicles);
}

module.exports = {list, show, create};