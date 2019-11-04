const express = require('express');
const router = express.Router();
const { vehicles } = require('../data/vehicles')


// get all vehicles
router.get("/vehicles", (req, res) => {
  res.json(vehicles);
});
// get one vehicle
router.get("/vehicles/:id", (req, res) => {
  let vehicle = vehicles.find(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (vehicle !== undefined) {
    return res.json(vehicle);
  } else {
    return res.json({ msg: `Vehicle ID #${req.params.id} does not exist...` });
  }
});
// create new vehicle
router.post('/vehicles', (req, res) => {
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
  }
  vehicles.push(newVehicle)
  res.json(vehicles)
});

module.exports = router;