const express = require('express');
const router = express.Router();
const {list, show, create} = require("../controllers/comments");

// Get all things
router.get('/comments', list);
  //Get One Thing
router.get('/comments/:id', show);
  //Create One Thing
router.post('/comments', create);

module.exports = router;