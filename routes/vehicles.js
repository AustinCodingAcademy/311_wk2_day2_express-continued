const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles');

// GET routes
router.get('/data/vehicles', vehiclesController.list);

router.get('/data/vehicles/:id', vehiclesController.show);

// POST routes
router.post('/data/vehicles', vehiclesController.create);

module.exports = router;