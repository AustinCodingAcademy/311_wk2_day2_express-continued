const comments = require("../data/comments")

const list = (req, res) => {
  res.json(comments);
}

const show = (req, res) => {
  let commentsId = parseInt(req.params.userId)
  let commentsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < comments.length; i++) {
    if (i + 1 === commentsId)  {
      res.json(comments[commentsIndex])
    }   
  }
}

const create = (req, res) => {
  console.log(req.body, "body")
  comments.push(req.body); 
  let newComment = comments[comments.length -1]
  newComment._id = counter
  counter++
  console.log(req.body)
  res.json(newComment)
}

module.exports = { list, show, create }