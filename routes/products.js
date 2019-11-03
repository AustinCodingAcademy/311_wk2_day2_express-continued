const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/products")

router.get('/products', list)

router.get('/products/:productsId', show)

router.post('/products', create)

module.exports = router