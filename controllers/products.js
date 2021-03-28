const products = require("../data/products.js");

const list = (req, res) => {
  return res.json(products);
};

const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(products[id]);
};

const create = (req, res) => {
  let counter = products.length;
  let newProduct = req.body;
  newProduct._id = counter + 1;
  products.push(newProduct);
  return res.json(products[newProduct._id - 1]);
};

module.exports = {
  list,
  show,
  create,
};
