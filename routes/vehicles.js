const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles')


// get all vehicles
router.get("/vehicles", vehicleController.getAll);
// get one vehicle
router.get("/vehicles/:id", vehicleController.getOne);
// create new vehicle
router.post('/vehicles', vehicleController.postNew);

module.exports = router;