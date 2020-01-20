const products = require('../data/products')
let productCounter = products.length;


const list = (req, res) => {
  res.json(products)
  };

const show = (req, res) => {
  let idSearched = req.params.id
  const product = products.find(product =>
  product._id == idSearched)
  res.json(product)
  };

const create = (req, res) => {
  let product = req.body;
  productCounter += 1
  product._id = productCounter
  products.push(product)
  res.json(products)
  };

  module.exports = { list, show, create }