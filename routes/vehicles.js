const express = require('express');
const router = express.Router();

// hey look..another one!

// include the controller for this route
const controller = require('../controllers/vehicles');

// define the paths for the controller methods

// show us all you got
router.get('/vehicles', controller.list);

// just one at a time, plizz
router.get('/vehicles/:id',controller.show);

// let's add a new CAR!
router.post('/vehicles',controller.create);

// make router available to the API
module.exports = router