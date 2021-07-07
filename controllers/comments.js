const comments = require('../data/comments')

//get
const commentsList = (req, res) => {
  res.json(comments)
}
//get
const commentsListById = (req, res) => {  
const found = comments.some(comment => comment._id == req.params.id);
if(found){
  res.send(comments.filter(comment => comment._id == req.params.id))
}else{
  res.status(404).json({msg: 'Comment not found'});
}
}

//MAY NEED TO DOUBLE CHECK
//post
const createComment = (req, res) => { 
  counter = comments.length;
  const newComment = {
      _id: counter+1, 
      body: req.body.body,
      postId: req.body.postId,
  
  }

  if(!newComment.body || !newComment.postId){
    return res.status(400).json({ msg: 'Please include a comment, and postId'});
  }

  comments.push(newComment);
  res.json(comments)
}

module.exports = { commentsList, commentsListById, createComment } 

