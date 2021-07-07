const express = require('express')
const router = express.Router()

const vehicleController = require('../controller/vehicles')

router.get('/data/vehicles', vehicleController.list)
router.get('/data/vehicles/:id', vehicleController.show)
router.post('/data/vehicles', vehicleController.create)

module.exports = router