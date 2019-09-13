const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  const foundComment = comments.some(
    comment => comment._id === parseInt(req.params.id)
  );

  if (foundComment) {
    res.json(
      comments.filter(comment => comment._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no comment with that id` });
  }
};

const create = (req, res) => {
  let newComment = req.body;
  res.send(newComment);
  console.log(newComment);
};
module.exports = { list, show, create };
