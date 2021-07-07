const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

// Get ALL things
router.get('/', vehiclesController.list)

// Get ONE thing
router.get('/:id', vehiclesController.show)

// Create ONE thing
router.post('/:id', vehiclesController.create)

module.exports = router;