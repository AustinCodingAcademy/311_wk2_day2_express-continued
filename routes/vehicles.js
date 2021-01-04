const express = require('express')
const router = express.Router()

//Controller
const controllerVehicles = require('../controllers/controllerVehicles')

//Get Requests
router.get('/', controllerVehicles.list)
router.get('/:id', controllerVehicles.listById)

//Post Requests
router.post('/', controllerVehicles.post)
module.exports = router;