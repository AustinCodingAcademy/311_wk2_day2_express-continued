const vehicles = require('../data/vehicles');

// COUNTER FUNCTION
const counterV = function() {
  let id = vehicles.length;
  id++;
  return id;
};
// GET ARRAY
exports.list = function list(req,res) {
  return res.json(vehicles);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let vehicle = vehicles.find(arrObj => arrObj._id === usrID);

  console.log(vehicles);
  res.json(vehicle);   
};
// POST ITEM
exports.create = function create(req,res) {
  const newVehicle = {
    _id: counterV(),
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body,make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  };
  
  vehicles.push(newVehicle);
  console.log(newVehicle);
  res.json(vehicles);
};