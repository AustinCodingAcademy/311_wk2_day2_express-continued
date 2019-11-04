const products = require("../data/products");

const list = (req, res) => res.json(products);

const show = (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneProduct = res.json(
    products.find(product => product._id === singleItemById)
  );
  res.json(oneProduct);
};

let productsIdBase = products.length + 1;
const create = (req, res) => {
  const newProduct = {
    _id: productsIdBase++,
    name: req.body.name,
    description: req.body.description
  };
  products.push(newProduct);
  res.json(products);
};

module.exports = { list, show, create };
