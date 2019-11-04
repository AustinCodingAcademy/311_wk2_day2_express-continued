const express = require('express');
const router = express.Router();

const vehicles = require("../data/vehicles");

router.get("/vehicles", (req, res) => res.json(vehicles));

router.get("/vehicles/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneVehicle = res.json(
    vehicles.find(vehicle => vehicle._id === singleItemById)
  );
  res.json(oneVehicle);
});

let vehicleIdBase = vehicles.length + 1;
router.post("/vehicles", (req, res) => {
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
});

module.exports = router;