const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments')

// get all comments
router.get("/comments", commentController.getAll);
// get one comment
router.get("/comments/:id", commentController.getOne);
// post new comment
router.post("/comments", commentController.postNew);

module.exports = router;