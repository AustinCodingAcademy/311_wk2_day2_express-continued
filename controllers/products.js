const products = require('../data/products');

const list = (req, res) => {
  res.json(products);
};
const show = (req, res) => {
  let product = products.find(item => item._id == req.params.id);
  if (product)
    res.json(product);
  else
    res.status(400).send(`There is no product with id: ${req.params.id}`);
};
const create = (req, res) => {
  let newID = products.length + 1;
  req.body._id = newID;
  req.body.postID = 1;
  products.push(req.body);
  res.json(products);
};

module.exports = { list, show, create };