const express = require('express');
const router = express.Router();

//import the products array
const products = require('../data/products');
let counter = products.length;

//PRODUCTS
router.get('/products', (req, res) => {
    res.json(products)
})
router.get('/products/:id', (req, res) => {
	let product = products.find(c => c._id === req.params.id)
    res.json(product)
})
router.post('/products', (req, res) => {
	let newProduct = req.body;
	newProduct._id = counter + 1;
	products.push(newProduct);
	res.json(newProduct);
})

module.exports = router;