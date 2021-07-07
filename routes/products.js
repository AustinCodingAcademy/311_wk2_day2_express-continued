const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')


let productsCounter = products.length;

router.get("/products", (req, res) => {
  res.json(products);
})

router.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id)
  res.json(product);
})

router.post("/products", (req, res) => {
  const newProduct = req.body;
  productsCounter = productsCounter+1;
  newProduct._id = productsCounter;
  contacts.push(newProduct);
  res.json(newProduct);
})

module.exports = router
