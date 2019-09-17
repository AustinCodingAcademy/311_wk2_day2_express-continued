const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles')
//const {list,show,create,update,remove} = require('../controllers/vehicles')

//VEHICLES
router.get('/vehicles', vehiclesController.list)
router.get('/vehicle/:id', vehiclesController.show)
router.post('/vehicles', vehiclesController.create)
// router.put('/vehicles', update)
// router.delete('/vehicles', remove)

module.exports = router;