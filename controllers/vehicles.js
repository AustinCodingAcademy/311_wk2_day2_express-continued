const vehicles = require("../data/vehicles");
let vehicleCounter = vehicles.length;

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  const id = req.params.id;

  const match3 = vehicles.find((vehicle) => vehicle._id === Number(id));
  res.json(match3);
};

const create = (req, res) => {
  vehicles.push({
    _id: vehicleCounter + 1,
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
  });
  res.json(vehicles);
};

module.exports = { list, show, create };
