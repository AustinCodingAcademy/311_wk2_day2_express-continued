const express = require('express')
const router = express.Router()


router.get("/data/products", (req, res) => {
  res.json(products);
});


router.get("/products/:id", (req, res) => {
  let item = products.find((product) => product._id == req.params.id);
  res.json(item);
});

router.post('/products', (req, res) => {
  let counter = products.length + 1;

  let newProduct = {
    "_id": req.body.counter,
    "name": req.body.name,
    "description": req.body.description,
    "rating": req.body.rating,
    "imgUrl": req.body.imgUrl,
    "price": req.body.price,
    "category": req.body.category,
    "reviews": req.body.reviews
  }

  products.push(req.body);
})

module.exports = router;