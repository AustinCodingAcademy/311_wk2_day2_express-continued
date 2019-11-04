const comments = require('../data/comments');

//list
exports.list = function list(res, req) {
  res.json(comments);
}
// show
exports.show = function show(res, req) {
  let comment = comments.find(i => i._id == req.params.id);
  res.json(comment);
}
// create
exports.create = function create(res, req) {
  let content = req.body;
  let newComment = {
    _id: comments.length + 1,
    body: content.body,
    postId: content.postId
  }

  comments.push(newComment);
}