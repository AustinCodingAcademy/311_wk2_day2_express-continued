const express = require('express')
const router = express.Router()
const { products } = require('../data/products')

// get all products
router.get("/products", (req, res) => {
  res.json(products);
});
// get one product
router.get("/products/:id", (req, res) => {
  let product = products.find(
    product => product._id === parseInt(req.params.id)
  );
  if (product !== undefined) {
    return res.json(product);
  } else {
    return res.json({ msg: `Product ID #${req.params.id} does not exist...` });
  }
});
// create new product
router.post("/products", (req, res) => {
  let counter = products.length;
  const newProduct = {
    _id: counter + 1,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  };
  products.push(newProduct);
  res.json(products);
});

module.exports = router;