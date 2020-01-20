const express = require('express')
const router = express.Router()

const { comments } = require('../data/comments');
let commentsCounter = comments.length;

router.use((req, res, next) => {
  if(req.path === "/comments" && req.method === "GET") {
    return res.json(comments)
  }
  next()
})

router.get('/comments/:commentIds', (req, res) => {
  let comment = comments.find(p=>p._id == req.params.commentIds);

  res.json(comment)
})

router.post('/comments', (req, res) => {
  let comment = req.body;
  let newUserId = commentsCounter + 1;
  commentsCounter = commentsCounter + 1;

  req.body._id = newUserId;

  comments.push(comment);

  res.json({user: comment})
})

module.exports = router;