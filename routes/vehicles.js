const express = require('express');
const router = express.Router();
const {displayVehicles, showVehicles, postVehicles} = require('../controllers/vehicles')

router.get("/vehicles", displayVehicles);

router.get("/vehicles/:id", showVehicles);

router.post("/vehicles", postVehicles);

module.exports = router;