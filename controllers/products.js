const products = require("../data/products");
let productCounter = products.length;

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product._id === Number(id));
  res.json(product);
};

const create = (req, res) => {
  let newProduct = {
    _id: (productCounter += 1),
    name: req.body.name,
    description: req.body.description,
    postId: 1
  };

  console.log(newProduct);
  products.push(newProduct);
};

module.exports = {
  list,
  show,
  create
};
