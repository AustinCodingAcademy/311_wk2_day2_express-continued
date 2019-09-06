const comments = require("../data/comments");

const show = (req, res) => {
  const found = comments.some(
    comment => comment._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      comments.filter(comment => comment._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
  }
};

const list = (req, res) => {
  res.json(comments);
};

const create = (req, res) => {
  res.send(req.body);
};

module.exports = { show, list, create };
