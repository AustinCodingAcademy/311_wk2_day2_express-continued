const express = require('express');
const router = express.Router();
let controllerVehicles = require('../controller/controllerVehicles');

router.get('/', controllerVehicles.vehiclesGet);
router.get('/:id', controllerVehicles.vehiclesGetId);
router.post('/', controllerVehicles.vehiclesPost);
router.put('/:id', controllerVehicles.vehiclesPut);
router.delete('/:id', controllerVehicles.vehiclesDelete);

module.exports = router;