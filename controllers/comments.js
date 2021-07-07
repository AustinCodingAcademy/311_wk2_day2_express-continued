const comments = require("../data/comments")

let counter = comments.length +1

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
  const newComment = {
    _id: counter,
    body: req.body.body,
    postId: req.body.postId
    }
    comments.push(newComment); 
    counter = counter++
    console.log(req.body)
    res.json(newComment)
}

module.exports = { list, show, create }