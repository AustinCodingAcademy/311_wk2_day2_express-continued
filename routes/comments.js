const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

// GET routes
router.get('/data/comments', (req, res) => {
  res.json(comments);
});

router.get('/data/comments/:id', (req, res) => {
  let id = req.params.id -1;
  if (!comments[id]) {
    res.send(`Comment id #${req.params.id} not found!`);
  } else {
    res.json(comments[id]);
  }
});

// POST routes
router.post('/data/comments', (req, res) => {
  let counter = comments.length;
  req.body._id = counter +1;
  comments.push(req.body);
  res.json(comments);
});

module.exports = router;