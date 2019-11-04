const express = require('express');
const router = express.Router();
const products = require("../data/products");
const list = require('../routes/products')

router.get("/products", (req, res) => res.json(products));

router.get("/products/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneProduct = res.json(
    products.find(product => product._id === singleItemById)
  );
  res.json(oneProduct);
});

let productsIdBase = products.length + 1;
router.post("/products", (req, res) => {
  const newProduct = {
    _id: productsIdBase++,
    name: req.body.name,
    description: req.body.description
  }
  products.push(newProduct);
  res.json(products);
});

// router.get('/products', list);

// router.get('/products/:id', show);

// router.post('/products', create);

// router.put('/products', );

// router.delete('/products', )


module.exports = router;