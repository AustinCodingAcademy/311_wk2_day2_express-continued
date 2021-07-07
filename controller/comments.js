const comments = require('../data/comments')

const list = (req, res) => res.json(comments)

const show = (req, res) => {
  res.json (comments.find(x => {
    return +req.params.id === x._id
  }))
}

const create = (req, res) => {
  let newID = comments.length + 1

  let newComment = {
    _id: newID,
    body: req.body.body,
    postId: req.body.postId
  }

  comments.push(newComment)
  res.json(comments)
}

module.exports = {
  list,
  show,
  create
}

