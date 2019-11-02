const express = require("express");
const router = express.Router();

const proconch = require("../controller/products")

router.get("/products", proconch.list)

router.get("/products/:id", proconch.show)

router.post("/products", proconch.create)

module.exports = router
