const express = require('express');
const router = express.Router();
const {displayComments, commentShow, commentPost} = require('../controllers/comments')

router.get("/comments", displayComments);

router.get("/comments/:id", commentShow);

router.post("/comments", commentPost);

module.exports = router;