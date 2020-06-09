const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  let getId = comments.find((user) => user._id === parseInt(req.params.id));
  res.json(getId);
};

const create = (req, res) => {
  let counter = comments.length + 1;
  const newComments = {
    postId: counter,
    _id: req.body._id,
    body: req.body.body,
    postId: req.body.postId,
  };

  comments.postId = counter;
  comments.push(newComments);
  res.json(comments);
};

module.exports = { list, show, create };
