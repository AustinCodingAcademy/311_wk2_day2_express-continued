const express = require("express");
const router = express.Router();
const commentController = require("../controller/comments");

router.get("/comments/:id", commentController.list);

router.get("/comments/:id", commentController.show);

router.post("/comments", commentController.create);

module.exports = router;
