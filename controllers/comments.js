const comments = require('../data/comments')
let counter = comments.length;


 const list = (req, res) => {
  return res.json(comments)
}

const show = (req,res)=>{
  let getComment = users.find(getComment => getComment._id === parseInt(req.params.id))
  res.json(getComment);
}

const create = (req,res)=>{
  let createComment = req.body;
  comments.push(createComment);
  createComment._id = counter++;
  res.json(createComment)
}

module.exports = {list,show,create}