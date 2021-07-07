const express = require('express');
const router = express.Router();

// get access to the controller
const controller = require('../controllers/products');

//define paths to controller methods

// show ALL the products!
router.get('/products', controller.list);

// just show one of dem products
router.get('/products/:id', controller.show)

// add a new product
router.post('/products',controller.create)

// make the router available to the API
module.exports = router