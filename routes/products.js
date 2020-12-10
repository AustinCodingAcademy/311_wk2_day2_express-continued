const express = require("express");
const router = express.Router();
const products = require("../data/products.js");

router.get("/products", (req, res) => {
  return res.json(products);
});

router.get("/products/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(products[id]);
});

router.post("/products", (req, res) => {
  let counter = products.length;
  let newProduct = req.body;
  newProduct._id = counter + 1;
  products.push(newProduct);
  return res.json(products[newProduct._id - 1]);
});

module.exports = router;
