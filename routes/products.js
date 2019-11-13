const express = require('express');
const router = express.Router();
const {displayProducts, postProducts, showProducts} = require('../controllers/products');


// app.get('/products', function(req, res){
//   res.json('../data/products')

// })

router.get('/products', displayProducts)

router.get('/products/:id', showProducts)

router.post('/products', postProducts)

module.exports = router