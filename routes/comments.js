const express = require('express')
const router = express.Router()
const productsController = require('../controllers/comments')

let commentsCounter = comments.length;

router.get("/comments", (req, res) => {
  res.json(comments);
})

router.get("/comments/:id", (req, res) => {
  const comment = comments.find((com) => com._id == req.params.id)
  res.json(comment);
})

router.post("/comments", (req, res) => {
  const newComment = req.body;
  commentsCounter = commentsCounter+1;
  newComment._id = commentsCounter;
  contacts.push(newComment);
  res.json(newComment);
})

module.exports = router