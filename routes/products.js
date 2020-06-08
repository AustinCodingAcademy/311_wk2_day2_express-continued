const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const products = require('../data/products')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

let counter = 1;

router.get('/products',(req,res)=>{
  res.json(products)
})

router.get('/products/:productId',(req,res)=>{
  let productStringId = req.params.productId
  let productsId = parseInt(productStringId)
  for(let i = 0; i < products.length; i++){
    console.log(products[i]._id)
    if(products[i]._id === productsId){
      console.log(products[i])
      return res.json(products[i])
    }
  } 
})

router.post('/products',(req,res)=>{
  let newProduct = {
    _id : 8,
    name : req.body.name,
    description : req.body.description
  }
  products.push(newProduct)
  for(let i = 0; i < products.length;i++){
   products[i]._id = counter + products.indexOf(products[i]) 
  }
  return res.json(products)
})

module.exports = router