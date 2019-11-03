const express = require("express");
const router = express.Router();
const vehicles = require("../data/vehicles");

app.get("/vehicles", (req, res) => {
  res.send(vehicles);
});
app.get("/vehicles/:id", (req, res) => {
  const found = vehicles.some(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No vehicle with ${req.params.id} was found` });
  }
});
app.post("/vehicles", (req, res) => {
  const newVehicle = {
    _id: counter(vehicles) + 1,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    postId: 1
  };

  if (!newVehicle.year || !newVehicle.make || !newVehicle.model) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  vehicles.push(newVehicle);
  res.json(vehicles);
});

module.exports = router;
