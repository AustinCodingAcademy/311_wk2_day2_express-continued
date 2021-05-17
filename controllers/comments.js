const comments = require("../data/comments")

const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  comments.forEach(comment => {
    if (comment._id == req.params.id) {
      res.json(comment)
    }
  })
}

const create = (req, res) => {
  let counter = ++comments.length
  comments.push({
    _id: ++counter,
    body: req.body.message,
    postId: 1
  })
  res.json(comments[comments.length - 1])
}

module.exports = { list, show, create }
