const products = require("../data/products");
let productCounter = products.length;

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const id = req.params.id;
  const foundProducts = products.find(products => products._id === Number(id));
  res.json(foundProducts);
};

const create = (req, res) => {
  let newProduct = {
    _id: productCounter + 1,
    body: req.body.body,
    postId: 1
  };
  products.push(newProduct);
  res.json(newProduct);
};

module.exports = {
  list,
  show,
  create
};
