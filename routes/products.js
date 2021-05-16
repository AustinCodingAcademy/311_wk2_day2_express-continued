const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));
const productsController = require("../controllers/products")


//GET Pruducts
router.get('/products', productsController.list)

//GET Products by ID
router.get('/products/:id', productsController.show)


//Post Products
router.post('/products', productsController.create)

module.exports = router