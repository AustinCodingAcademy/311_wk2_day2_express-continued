const express = require('express')
const router = express.Router()

// import control
const productsControl = require("../controllers/products")

router.get("/products", productsControl.list)
router.get("/products/:id", productsControl.show)
router.post("/products", productsControl.create)

module.exports = router;