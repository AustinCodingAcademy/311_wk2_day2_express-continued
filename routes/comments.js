const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/comments")


router.get('/comments', list)

router.get('/comments/:commentsId', show)

router.post('/comments', create)

module.exports = router;
