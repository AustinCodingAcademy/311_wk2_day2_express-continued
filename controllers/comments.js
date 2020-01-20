const { comments } = require('../data/comments');
let commentsCounter = comments.length;

const list = (req, res) => res.json(comments);

const show =  (req, res) => {
  let comment = comments.find(p=>p._id == req.params.commentsIds);
  res.json(comment)
}

const create = (req, res) => {
  let comment = {
    body: req.body.body,
    postId: 1
  };
  let newUserId = commentsCounter + 1;
  commentsCounter = commentsCounter + 1;

  req.body._id = newUserId;

  comments.push(comment);

  res.json({user: comment})
}

module.exports = {list, show, create}