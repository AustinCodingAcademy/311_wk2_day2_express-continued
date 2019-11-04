const express = require('express')
const router = express.Router()
const { comments } = require('../data/comments')

// CRUD Comments
// get all comments
router.get("/comments", (req, res) => {
  res.json(comments);
});
// get one comment
router.get("/comments/:id", (req, res) => {
  let comment = comments.find(
    comment => comment._id === parseInt(req.params.id)
  );
  if (comment !== undefined) {
    return res.json(comment);
  } else {
    return res.json({ msg: `Comment ID #${req.params.id} does not exist...` });
  }
});
// post new comment
router.post("/comments", (req, res) => {
  let counter = comments.length;
  const newComment = {
    _id: counter + 1,
    body: req.body.body,
    postID: 1
  };
  comments.push(newComment);
  res.json(comments);
});

module.exports = router;