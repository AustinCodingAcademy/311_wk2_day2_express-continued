const express = require('express');
const router = express.Router();
const {displayVehicles, postVehicles, showVehicles} = require('../controllers/vehicles');


// app.get('/Vehicles', function(req, res){
//   res.json('../data/Vehicles')

// })

router.get('/vehicles', displayVehicles)

router.get('/vehicles/:id', showVehicles)

router.post('/vehicles', postVehicles)

module.exports = router