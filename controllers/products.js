const products = require('../data/products')
let counter = 1;

const list = (req,res)=>{
  res.json(products)
}

const getOne = (req,res)=>{
  let productIdString = req.params.productId
  let productId = parseInt(productIdString)
  for(let i = 0; i< products.length;i++){
    if(products[i]._id === productId){
      return res.json(products[i])
    }
  }
}

const post = (req,res)=>{
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
}

module.exports = {list : list, getOne , post}