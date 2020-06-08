const comments = require('../data/comments')

const list = (req,res)=>{
  res.json(comments)
}

const getOne = (req,res)=>{
  let commentIdString = req.params.commentId
  let commentId = parseInt(commentIdString)
  for(let i = 0; i< comments.length;i++){
    if(comments[i]._id === commentId){
      return res.json(comments[i])
    }
  }
}

const post = (req,res)=>{
  userPost = req.body
  console.log(userPost.body)
  let post = {
    _id: 5,
    body: userPost.body
  }
  comments.push(post)
  return res.json(comments)
}

module.exports = {list : list, getOne , post}