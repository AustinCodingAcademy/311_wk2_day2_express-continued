const { products } = require('../data/products');
let productsCounter = products.length;

const list = (req, res) => res.json(products);

const show =  (req, res) => {
  let product = products.find(p=>p._id == req.params.productIds);
  res.json(product)
}

const create = (req, res) => {
  let product = req.body;
  let newUserId = productsCounter + 1;
  productsCounter = productsCounter + 1;

  req.body._id = newUserId;

  products.push(product);

  res.json({user: product})
}

module.exports = {list, show, create}