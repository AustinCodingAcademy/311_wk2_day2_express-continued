const express = require('express');
const router = express.Router();
const products = require('../data/products');

// GET routes
router.get('/data/products', (req, res) => {
  res.json(products);
});

router.get('/data/products/:id', (req, res) => {
  let id = req.params.id -1;
  if (!products[id]) {
    res.send(`Product id #${req.params.id} not found!`);
  } else {
    res.json(products[id]);
  }
});

// POST routes
router.post('/data/products', (req, res) => {
  let counter = products.length;
  req.body._id = counter +1;
  products.push(req.body);
  res.json(products);
});

module.exports = router;