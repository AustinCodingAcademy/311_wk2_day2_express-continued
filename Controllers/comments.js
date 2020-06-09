const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const findComments = comments.find(
    (comment) => comment._id === parseInt(req.params.id)
  );
  res.json(findComments);
};

const create = (req, res) => {
  let counter = comments.length + 1;
  let newComment = {
    ...req.body,
    postId: 1,
  };
  newComment._id = counter;
  comments.push(newComment);
  res.json({ msg: "New Contact Added!", comment: newComment });
};

module.exports = { list, show, create };
