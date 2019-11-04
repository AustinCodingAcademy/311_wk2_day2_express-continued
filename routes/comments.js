const express = require('express');
const router = express.Router();
const comments = require("../data/comments");

router.get("/comments", (req, res) => res.json(comments))

router.get("/comments/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneComment = res.json(
    comments.find(comment => comment._id === singleItemById)
  );
  res.json(oneComment);
});

let commentsIdBase = comments.length + 1;
router.post("/comments", (req, res) => {
  const newComment = {
    _id: commentsIdBase++,
    body: req.body.body,
    postId: 1
  };
  
  comments.push(newComment);
  res.json(comments);
});

module.exports = router;