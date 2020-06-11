const express = require('express');
const router = express.Router();
const vehicles = require('../data/vehicles');

// GET routes
router.get('/data/vehicles', (req, res) => {
  res.json(vehicles);
});

router.get('/data/vehicles/:id', (req, res) => {
  let id = req.params.id -1;
  if (!vehicles[id]) {
    res.send(`Vehicle id #${req.params.id} not found!`);
  } else {
    res.json(vehicles[id]);
  }
});

// POST routes
router.post('/data/vehicles', (req, res) => {
  let counter = vehicles.length;
  req.body._id = counter +1;
  vehicles.push(req.body);
  res.json(vehicles);
});

module.exports = router;