const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')

// get all products
router.get("/products", productController.getAll);
// get one product
router.get("/products/:id", productController.getOne);
// create new product
router.post("/products", productController.postNew);

module.exports = router;