const comments = require("../data/comments");

module.exports.list = function(req, res) {
  return res.json(comments);
}

module.exports.show = function(req, res) {
  res.json(comments.find(item => item._id == req.params.id))
}

module.exports.create = function(req, res) {
  const nub = {
    _id:comments.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  comments.push(nub)
  return res.json(nub)
}