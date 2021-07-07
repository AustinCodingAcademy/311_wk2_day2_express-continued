const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')

router.get('/products', productsController.productsList)

router.get('/products/:id', productsController.productsListById)

router.post('/products', productsController.createProduct)

module.exports = router;
