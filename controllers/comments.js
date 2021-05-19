const comments = require('../data/comments');
let commentCounter = comments.length;


const getAll = (req, res) => {
  res.json(comments);
}

const getById = (req, res) => {
  let comment = comments.find(comment => comment._id == req.params.id);
  res.json(comment);
}

const create = (req, res) => {
  commentCounter++
  let body = req.body;
  body._id = commentCounter;
  comments.push(body)
  res.json(body);
}

module.exports = {
  getAll,
  getById,
  create
}