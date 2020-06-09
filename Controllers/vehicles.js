const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  let getId = vehicles.find((user) => user._id === parseInt(req.params.id));
  res.json(getId);
};

const create = (req, res) => {
  let counter = vehicles.length + 1;
  const newVehicle = {
    postId: counter,
    _id: req.body._id,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew,
  };

  newVehicle.postId = counter;
  vehicles.push(newVehicle);
  res.json(vehicles);
};

module.exports = { list, show, create };
