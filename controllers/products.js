const products = require('../data/products');
let productCounter = products.length;

const getAll = (req, res) => {
  res.json(products);
}

const getById = (req, res) => {
  let product = products.find(product => product._id == req.params.id);
  res.json(product);
}

const create = (req, res)=> {
  productCounter++
  let body = req.body;
  body._id = productCounter;
  products.push(body);
  res.json(body);
}

module.exports = {
  getAll,
  getById,
  create
}