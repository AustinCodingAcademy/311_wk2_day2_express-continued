const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  let item = comments.find((comment) => comment._id == req.params.id);
  res.json(item);
};

const create = (req, res) => {
  let counter = comments.length + 1;

  let newComment = {
    "_id": req.body.counter,
    "body": req.body.body,
    "postId": req.body.postId
  }

  comments.push(req.body);
};

module.exports = { list, show, create }