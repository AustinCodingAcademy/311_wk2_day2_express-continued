const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  const findProducts = products.find(
    (product) => product._id === parseInt(req.params.id)
  );
  res.json(findProducts);
};

const create = (req, res) => {
  let counter = products.length + 1;
  let newProduct = {
    ...req.body,
    postId: counter,
  };
  newProduct._id = counter;
  products.push(newProduct);
  res.json({ msg: "New Contact Added!", product: newProduct });
};

module.exports = { list, show, create };
