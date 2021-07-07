const express = require("express");
const router = express.Router();
const productController = require("../controller/comments");

router.get("/comments/:id", productController.list);

router.get("/comments/:id", productController.show);

router.post("/comments", productController.create);

module.exports = router;
