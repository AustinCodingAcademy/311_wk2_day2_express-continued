const express = require("express");
const router = express.Router();
const vehicleControllers = require("../controllers/vehicles");

router.get("/vehicles", vehicleControllers.list);

router.get("/vehicles/:id", vehicleControllers.show);

router.post("/vehicles", vehicleControllers.create);

module.exports = router;
