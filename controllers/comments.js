const comments = require('../data/comments');

const list = (req,res) => {
  res.json(comments)
}

const show = (req, res) => {
  let comment = comments.find(comment => comment._id == req.params.id)
  res.json(comment)
}

const create = (req, res) => {
  let newCommentId = comments.length+1;

  let newComment = {
    _id: newCommentId,
    body: req.body.body,
    postId: 1
  }
  
  comments.push(newComment)

  res.json(comments)

  // req.body._id = comments.length+1
  // body = req.body.body;
  // req.body.postId = 1;

  // comments.push(req.body)

  // res.json(comments)
}

module.exports = { list, show, create }