const { vehicles } = require("../data/vehicles");

// get all
function getAll(req, res) {
  return res.json(vehicles);
}
// get one
function getOne(req, res) {
  let vehicle = vehicles.find(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (vehicle !== undefined) {
    return res.json(vehicle);
  } else {
    return res.json({ msg: `Vehicle ID #${req.params.id} does not exist...` });
  }
}
//post new
function postNew(req, res) {
  let counter = vehicles.length;
  const newVehicle = {
    _id: counter + 1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  };
  vehicles.push(newVehicle);
  res.json(vehicles);
}

module.exports = { getAll, getOne, postNew };
