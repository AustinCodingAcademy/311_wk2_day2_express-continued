const vehicles = require("../data/vehicles");

const list = (req, res) => res.json(vehicles);

const show = (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneVehicle = res.json(
    vehicles.find(vehicle => vehicle._id === singleItemById)
  );
  res.json(oneVehicle);
};

let vehicleIdBase = vehicles.length + 1;
const create = (req, res) => {
  const newVehicle = {
    _id: vehicleIdBase++,
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
    postId: 1
  };
  vehicles.push(newVehicle);
  res.json(vehicles);
};

module.exports = { list, show, create };
