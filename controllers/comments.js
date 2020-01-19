const comments = require('../data/comments');

// COUNTER FUNCTION
const counterComm = function() {
  let id = comments.length;
  id++;
  return id;
};
// GET ARRAY
exports.list = function list(req,res) {
  return res.json(comments);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let comment = comments.find(arrObj => arrObj._id === usrID);

  console.log(comments);
  res.json(comment);  
};
// POST ITEM
exports.create = function create(req,res) {
  const newComment = {
    _id: counterComm(),
    body: req.body.body,
    postId: 1,
  };
  
  comments.push(newComment);
  console.log(newComment);
  res.json(comments);
};