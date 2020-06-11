const products = require('../data/products');

const list = (req, res) => {
  res.json(products);
}

const show = (req, res) => {
  let id = req.params.id -1;
  if (!products[id]) {
    res.send(`Product id #${req.params.id} not found!`);
  } else {
    res.json(products[id]);
  }
}

const create = (req, res) => {
  let counter = products.length;
  req.body._id = counter +1;
  products.push(req.body);
  res.json(products);
}

module.exports = {list, show, create};