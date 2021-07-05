const express = require('express');
const router = express.Router();
let vehiclesController = require('../controllers/vehicles')

router.get('/', vehiclesController.list)
  
router.get('/:id', vehiclesController.show)

router.post('/', vehiclesController.create)
  
module.exports = router;