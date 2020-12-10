const express = require("express");
const router = express.Router();
const vehicles = require("../data/vehicles.js");

router.get("/vehicles", (req, res) => {
  return res.json(vehicles);
});

router.get("/vehicles/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(vehicles[id]);
});

router.post("/vehicles", (req, res) => {
  let counter = vehicles.length;
  let newVehicle = req.body;
  newVehicle._id = counter + 1;
  vehicles.push(newVehicle);
  return res.json(vehicles[newVehicle._id - 1]);
});

module.exports = router;
