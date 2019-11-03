const express = require('express')
const products = require("../data/products")
const productRoutes = express.Router()

//route.get()
productRoutes.get('/products', (req, res) => {
  res.json(products);
})

//route.get(/:userId`)
productRoutes.get('/products/:userId', (req, res) => {
  let productsId = parseInt(req.params.userId)
  let productsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < products.length; i++) {
    if (i + 1 === productsId)  {
      res.json(products[productsIndex])
    }   
  }
})

//route.post()
productRoutes.post('/products', (req, res) => {
  products.push(req.body); 
  let newProduct = products[products.length -1]
  newProduct._id = counter
  counter++
  console.log(req.body)
  res.json(newProduct)
})

module.exports = productRoutes;