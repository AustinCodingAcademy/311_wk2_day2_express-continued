const comments = require('../data/comments');

const list = (req,res) => {
  res.json(comments)
}

const show = (req, res) => {
  let comment = comments.find(comment => comment._id == req.params.id)
  res.json(comment)
}


module.exports = { list, show }