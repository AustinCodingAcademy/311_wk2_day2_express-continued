const express = require('express');
const router = express.Router();
const {displayProducts, showProducts, postProducts} = require('../controllers/products')

router.get("/products", displayProducts);

router.get("/products/:id", showProducts);

router.post("/products", postProducts);

module.exports = router;