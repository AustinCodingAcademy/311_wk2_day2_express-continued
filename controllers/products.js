const products = require('../data/products')
let counter = products.length;


 module.exports.list = (req, res) => {
  return res.json(products)
}

module.exports.show = (req,res) => {
  let getProduct = users.find(getProduct => getProduct._id === parseInt(req.params.id))
  res.json(getProduct);
}

module.exports.create = (req,res) => {
  let createProduct = req.body;
  products.push(createProduct);
  createProduct._id = counter++;
  res.json(createProduct)
}

