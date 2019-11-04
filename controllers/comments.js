const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneComment = res.json(
    comments.find(comment => comment._id === singleItemById)
  );
  res.json(oneComment);
};

let commentsIdBase = comments.length + 1;

const create = (req, res) => {
  const newComment = {
    _id: commentsIdBase++,
    body: req.body.body,
    postId: 1
  };

  comments.push(newComment);
  res.json(comments);
};

module.exports = { list, show, create };
