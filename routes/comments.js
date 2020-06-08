const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const comments = require('../data/comments')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/comments',(req,res)=>{
  res.json(comments)
})
router.get('/comments/:commentId',(req,res)=>{
  let commentIdString = req.params.commentId
  let commentId = parseInt(commentIdString)
  for(let i = 0; i < comments.length;i++){
    if(comments[i]._id === commentId){
      return res.json(comments[i])
    }
  }
})
router.post('/comments',(req,res)=>{
  userPost = req.body
  console.log(userPost.body)
  let post = {
    _id: 5,
    body: userPost.body
  }
  comments.push(post)
  return res.json(comments)
})

module.exports =router