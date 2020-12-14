const comments = require("../data/comments")

// function for list
const list = (req, res) => {
  return res.json(comments)
}

// function for show
const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(comments[id])
};

// function for create
const create = (res, req) => {
  let counter =  comments.length;
  let commentNew = req.body;
  commentNew._id = counter + 1;
  comments.push(commentNew);
  let counterComment = commentNew._id -1;
  return res.json(comments[counterComment])
}

//export modules
module.exports = {
  list,
  show,
  create
};
