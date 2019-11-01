const products = require('../data/products')
let counter = products.length;


 const list = (req, res) => {
  return res.json(products)
}

const show = (req,res)=>{
  let getProduct = users.find(getProduct => getProduct._id === parseInt(req.params.id))
  res.json(getProduct);
}

const create = (req,res)=>{
  let createProduct = req.body;
  products.push(createProduct);
  createProduct._id = counter++;
  res.json(createProduct)
}

module.exports = {list,show,create}