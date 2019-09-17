const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
	res.json(products);
});

router.get("/products/:productId", (req, res) => {
	let id = comments.find(i => i.id == req.params.productId);
	res.json(id);
});

router.post("/products", (req, res) => {
	let newProduct = req.body;
	products.push(newProduct);
	res.json(newProduct);
});

module.exports = router;
