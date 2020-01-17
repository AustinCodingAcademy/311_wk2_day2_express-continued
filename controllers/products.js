const products = require('../data/products')
let productCounter = products.length;


const list = (req, res) => {
  res.json(products)
  };

const show = (req, res) => {
  let idSearched = req.params.id
  const product = products.find(product=>product._id == idSearched)
  res.json(product)
  };

const create = (req, res) => {
  let newProduct = req.body;
  productCounter += 1
  newProduct._id = productCounter
  products.push(newProduct)
  res.json(products)
  };




module.exports = { list, show, create }