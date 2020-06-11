const comments = require('../data/comments');

const list = (req, res) => {
  res.json(comments);
}

const show = (req, res) => {
  let id = req.params.id -1;
  if (!comments[id]) {
    res.send(`Comment id #${req.params.id} not found!`);
  } else {
    res.json(comments[id]);
  }
}

const create = (req, res) => {
  let counter = comments.length;
  req.body._id = counter +1;
  comments.push(req.body);
  res.json(comments);
}

module.exports = {list, show, create};