const express = require("express");
const router = express.Router();
const comments = require("../data/comments.js");

router.get("/comments", (req, res) => {
  return res.json(comments);
});

router.get("/comments/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(comments[id]);
});

router.post("/comments", (req, res) => {
  let counter = comments.length;
  let newComment = req.body;
  newComment._id = counter + 1;
  comments.push(newComment);
  return res.json(comments[newComment._id - 1]);
});

module.exports = router;
