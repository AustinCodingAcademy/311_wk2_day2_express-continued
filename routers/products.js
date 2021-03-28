const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/products");

router.get("/products", vehicleController.list);

router.get("/products/:id", vehicleController.show);

router.post("/products", vehicleController.create);

module.exports = router;
