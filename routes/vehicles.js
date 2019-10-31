const express = require('express');
const router = express.Router();
const vehController = require('../controllers/vehicles');

router.get('/vehicles', vehController.list);
router.get('/vehicles:id', vehController.show);
router.post('/vehicles', vehController.create);



module.exports = router;
