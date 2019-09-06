const products = require("../data/products");
const show = (req, res) => {
  const found = products.some(
    product => product._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      products.filter(product => product._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};
const list = (req, res) => res.json(products);
const create = (req, res) => {
  res.send(req.body);
};

module.exports = { list, show, create };
