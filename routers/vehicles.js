const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const router = express.Router()
const vehicleController = require('../controllers/vehicles')

//Middleware
router.use(bodyParser.json())
/* BEGIN - create routes here */

//GET method to get all products.
router.get("/vehicles", vehicleController.getAllVehicles)

//GET method to get single user's information.

router.get('/vehicles/:productId', vehicleController.getSpecifiedVehicle)

//POST Method
router.post('/vehicles', vehicleController.postNewVehicle)


//PUT Method - update a user
router.put('/vehicles/:productId', vehicleController.putVehicle)

//DELETE Method
router.delete('/vehicles/:productId', vehicleController.deleteVehicle);

module.exports = router
