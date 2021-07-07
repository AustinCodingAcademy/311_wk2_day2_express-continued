const express = require('express')
const router = express.Router()
// const contacts = require('../data/contacts.js')
const vehicleController = (require('../controllers/vehicles'))
router.get('/vehicles', vehicleController.list)
router.get('/vehicles/:id', vehicleController.show)
router.post('/vehicles', vehicleController.create)
module.exports = router