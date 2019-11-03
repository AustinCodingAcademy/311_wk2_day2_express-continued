const comments = require("../data/comments");


exports.list = function (request, response) {
  return response.json(comments);
}

exports.show = function (req,res) {
  let id = comments.find(i => i._id == req.params.commentsId);
  res.json(id)
}

exports.create = function (req,res) {
  let newComment = req.body;
  comments.push(newComment)
  res.json(newComment)
}