const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/Vehicles");

router.get("/vehicles/:id", vehicleController.show);
router.post("/vehicles", vehicleController.create);
router.get("/vehicles", vehicleController.list);

module.exports = router;
