const comments = require('../data/comments')
let commentCounter = comments.length;

const list = (req, res) => {
  res.json(comments)
  };

const show = (req, res) => {
  let idSearched = req.params.id
  const comment = comments.find(comment => 
  comment._id == idSearched)
  res.json(comment)
};

const create = (req, res) => {
  let comment = req.body;
  commentCounter += 1
  comment._id = commentCounter
  comments.push(comment)
  res.json(comments)
  };

  module.exports = { list, show, create }