const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const productsController = require("../controllers/products")

//PRODUCTS REQUESTS

router.get("/products", productsController.list)

router.get("/products/:id", productsController.show)

router.post("/products", productsController.create)

module.exports = router
