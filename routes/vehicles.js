const express = require('express');
const router = express.Router();
const {list, show, create} = require("../controllers/vehicles");


// Get all things
router.get('/vehicles', list);
  //Get One Thing
router.get('/vehicles/:id', show);
  //Create One Thing
router.post('/vehicles', create);

module.exports = router;