const comments = require("../data/comments.js")
const list = (req, res)=>{
  res.json(comments)
  console.log("getting all")
}
const show =  (req, res)=>{
  console.log(parseInt(req.params.id))
  for(let i = 0; i < comments.length; i++){
    if(comments[i]._id === parseInt(req.params.id)){
      res.json(comments[i])
    }
  }
};
const create = (req, res)=>{

  // console.log(req)
  // console.log(req.body)
  req.body._id = comments.length+1;
  req.body.postId = 1;
  comments.push(req.body);
  res.send("Post Added")
};
module.exports = {
  list,
  show,
  create,
}

