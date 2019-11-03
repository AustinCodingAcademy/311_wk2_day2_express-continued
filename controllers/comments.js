const comments = require('../data/comments')
let counter = comments.length;


 module.exports.list = (req, res) => {
  return res.json(comments)
}

module.exports.show = (req,res) => {
  let getComment = users.find(getComment => getComment._id === parseInt(req.params.id))
  res.json(getComment);
}

module.exports.create = (req,res) => {
  let createComment = req.body;
  comments.push(createComment);
  createComment._id = counter++;
  res.json(createComment)
}

