const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/Comments");

router.get("/comments/:id", commentsController.show);
router.get("/comments", commentsController.list);

router.post("/comments", commentsController.create);

module.exports = router;
