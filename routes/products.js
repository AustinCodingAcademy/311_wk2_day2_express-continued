const express = require('express');
const router = express.Router();

//import the products array
const products = require('../data/products');
let counter = products.length;

//PRODUCTS
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
	let product = products.find(p => p._id === req.params.id)
    res.json(product)
})
app.post('/products', (req, res) => {
	let newProduct = req.body;
	//newProduct._id = counter + 1;
	comments.push(newProduct);
	res.json(newProduct);
})

