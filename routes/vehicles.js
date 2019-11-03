const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/vehicles")

router.get('/vehicles', list)

router.get('/vehicles/:vehiclesId', show)

router.post('/vehicles', create)

module.exports = router