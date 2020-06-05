const comments = require('../data/comments');

const list = (req,res) => {
  res.json(comments)
  console.log("hello")
}

module.exports = { list }