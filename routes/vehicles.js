const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

router.get("/data/vehicles", vehiclesController.list)

router.get("/data/vehicles/:id", vehiclesController.show)

router.post('/data/vehicles', vehiclesController.create)

module.exports = router;