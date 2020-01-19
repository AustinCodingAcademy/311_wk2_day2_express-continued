let comments = require("../data/comments");

// get - returns all
exports.list = function list(req, res) {
  return res.json(comments);
}

// get by id
exports.show = function show(req, res) {
  res.json(comments.find(comments => comments._id === parseInt(req.params._id))); 
}

// post 
exports.create = function create(req, res) {
    const newComment = {
      _id: ++counter,
      body: req.body.body,
      postId: req.body.postId
    }; 
    comments.push(newComment);
    res.json(comments);
}

module.exports = { list, show, create }