const express = require("express");
const router = express.Router();
const contactController = require("../controller/comments");

router.get("/comments/:id", contactController.list);

router.get("/comments/:id", contactController.show);

router.post("/comments", contactController.create);

module.exports = router;
