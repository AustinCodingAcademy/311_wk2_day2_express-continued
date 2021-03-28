const comments = require("../data/comments.js");

const list = (req, res) => {
  return res.json(comments);
};

const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(comments[id]);
};

const create = (req, res) => {
  let counter = comments.length;
  let newComment = req.body;
  newComment._id = counter + 1;
  comments.push(newComment);
  return res.json(comments[newComment._id - 1]);
};

module.exports = {
  list,
  show,
  create,
};
