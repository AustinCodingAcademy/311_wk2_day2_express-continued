const comments = require("../data/comments.js")

const list = (req, res) => {
  return res.json(comments)
}

const show = (req, res) => {
  let targetId = req.params.id -1
  return res.json(comments[targetId])
}

const create = (req, res) => {
  let counter = comments.length
  let comment = req.body
  comment._id = counter + 1
  comments.push(comment)
  return res.json(comments[comment._id])
}

module.exports = {list, show, create}