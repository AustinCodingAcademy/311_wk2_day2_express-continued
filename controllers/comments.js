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
  const postId = "1"
  let counter = ++comments.length
  let id = counter
  req.body.push(postId)
  req.body.push(id)
  comments.push(req.body)
  res.json(comments[comments.length - 1])
}

module.exports = { list, show, create }
