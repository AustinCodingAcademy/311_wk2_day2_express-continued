const express = require('express')
const router = express.Router()

const productController = require('../controller/products')

router.get('/data/products', productController.list)
router.get('/data/products/:id', productController.show)
router.post('/data/products', productController.create)

module.exports = router