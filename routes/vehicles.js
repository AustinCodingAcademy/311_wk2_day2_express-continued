const express = require("express");
const router = express.Router();
const vehicleController = require("../controller/comments");

router.get("/comments/:id", vehicleController.list);

router.get("/comments/:id", vehicleController.show);

router.post("/comments", vehicleController.create);

module.exports = router;
