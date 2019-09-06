const express = require("express");
const router = express.Router();
productsController = require("../controllers/Products");

router.get("/products/:id", productsController.show);
router.post("/products", productsController.create);
router.get("/products", productsController.list);

module.exports = router;
