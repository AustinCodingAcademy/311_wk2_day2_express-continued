const express = require('express');
const router = express.Router();
const {list, show, create} = require("../controllers/products");

// Get all things
router.get('/products', list);
  //Get One Thing
router.get('/products/:id', show);
  //Create One Thing
router.post('/products', create);

module.exports = router;