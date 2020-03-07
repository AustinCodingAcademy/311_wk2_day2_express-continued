const comments = require("../data/comments");
let commentCounter = comments.length;

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const id = req.params.id;
  const foundComments = comments.find(comments => comments._id === Number(id));
  res.json(foundComments);
};

const create = (req, res) => {
  let newComment = {
    _id: commentCounter + 1,
    body: req.body.body,
    postId: 1
  };
  comments.push(newComment);
  res.json(comments);
};

module.exports = {
  list,
  show,
  create
};
