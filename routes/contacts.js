const express = require('express');
const router = express.Router();
const {list, show, create} = require("../controllers/contacts");

// Get all things
router.get('/contacts', list);
  //Get One Thing
router.get('/contacts/:id', show);
  //Create One Thing
router.post('/contacts', create);

module.exports = router;