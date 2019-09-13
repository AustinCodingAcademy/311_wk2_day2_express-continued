const products = require("../data/products");
const list = (req, res) => {
  res.json(products);
};
const show = (req, res) => {
  const foundProducts = products.some(
    product => product._id === parseInt(req.params.id)
  );

  if (foundProducts) {
    res.json(
      products.filter(product => product._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no products with that id` });
  }
};

const create = (req, res) => {
  let product = req.body;
  res.send(product);
  console.log(product);
};

module.exports = { list, show, create };
