const express = require("express");
const router = express.Router();

const {list, show, create} = require('../controllers/vehicles');

router.get('/vehicles', list);
router.get('/vehicles/:id(\\d+)', show);
router.post('/vehicles', create);

module.exports = router;