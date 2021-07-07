const express = require('express')
// const products = require("../data/products")
const productRoutes = express.Router()
const productController = require("../controllers/products")

//route.get()
productRoutes.get('/products', productController.list)

//route.get(/:userId`)
productRoutes.get('/products/:userId', productController.show)

//route.post()
productRoutes.post('/products', productController.create)

module.exports = productRoutes;