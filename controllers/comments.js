const comments = require('../data/comments');

const list = (req, res) => {
  res.json(comments);
};
const show = (req, res) => {
  let comment = comments.find(item => item._id == req.params.id);
  if (comment)
    res.json(comment);
  else
    res.status(400).send(`There is no comment with id: ${req.params.id}`);
};
const create = (req, res) => {
  let newID = comments.length + 1;
  req.body._id = newID;
  req.body.postID = 1;
  comments.push(req.body);
  res.json(comments);
};

module.exports = { list, show, create };