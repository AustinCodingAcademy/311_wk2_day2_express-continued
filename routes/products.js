const express = require('express')
const router = express.Router()

const { products } = require('../data/products');
let productsCounter = products.length;

router.use((req, res, next) => {
  if(req.path === "/products" && req.method === "GET") {
    return res.json(products)
  }
  next()
})

router.get('/products/:productIds', (req, res) => {
  let product = products.find(p=>p._id == req.params.productIds);

  res.json(product)
})

router.post('/products', (req, res) => {
  let product = req.body;
  let newUserId = productsCounter + 1;
  productsCounter = productsCounter + 1;

  req.body._id = newUserId;

  products.push(product);

  res.json({user: product})
})

module.exports = router;