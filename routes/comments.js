const express = require("express");
const router = express.Router();
const comments = require("../data/comments");

router.get("/comments", (req, res) => {
  return res.json(comments);
});
router.get("/comments/:id", (req, res) => {
  const found = comments.some(
    comment => comment._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      comments.filter(comment => comment._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No comment with ${req.params.id} was found` });
  }
});
//creating user by client
router.post("/comments", (req, res) => {
  const newComment = {
    _id: counter(comments) + 1,
    body: req.body.body,
    postId: 1
  };

  if (!newComment.body) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  comments.push(newComment);
  res.json(comments);
});

module.exports = router;
