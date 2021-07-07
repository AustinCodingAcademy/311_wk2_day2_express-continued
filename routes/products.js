const express = require("express");
const router = express.Router();
const products = require("../data/products");

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const found = products.some(
    product => product._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      products.filter(product => product._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No product with ${req.params.id} was found` });
  }
});

app.post("/products", (req, res) => {
  const newProduct = {
    _id: counter(products) + 1,
    name: req.body.name,
    description: req.body.description,
    postId: 1
  };

  if (!newProduct.name || !newProduct.description) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  products.push(newProduct);
  res.json(products);
});

module.exports = router;
