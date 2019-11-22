const express = require('express');
const router = express.Router();
const VehiclesControllers = require('../controllers/vehicles');


router.get('/vehicles', VehiclesControllers.list);

router.get('/vehicles/:id', VehiclesControllers.show);
 
router.post('/vehicles', VehiclesControllers.create);
 
module.exports = router;




