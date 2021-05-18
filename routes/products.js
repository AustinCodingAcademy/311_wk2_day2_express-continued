const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/products.js');


productsRouter.get('/products/:id', productsController.getProduct);
productsRouter.get('/products', productsController.getAllProducts);
productsRouter.post('/products', productsController.postProduct);


module.exports = productsRouter;