const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

//Get All Things
router.get('/', vehiclesController.list)

//Get One Thing
router.get('/:id', vehiclesController.show)

//Create One Thing
router.post('/:id', vehiclesController.create)

module.exports = router;