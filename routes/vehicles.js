// Vehicles Routes File

const express = require("express")
const router = express.Router();
const vehiclesController = require ("../controllers/vehicles")


router.get ("/vehicles", vehiclesController.listVehicles);
router.get ("/vehicles/:id", vehiclesController.displaySingleVehicle)












module.exports = router;


