const express = require('express');
const router = express.Router();

let products = require("../data/products");
let lastProductsId = products.length;


router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/:id', (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
});

router.post('/products', (req, res) => {
    let newEntry = req.body;
    let newId = lastProductsId++;
    newEntry._id = newId;
    products.push(newEntry);
});

module.exports = router;