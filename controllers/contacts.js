const contacts = require("../data/contacts")
const list = (req, res)=>{
  res.json(contacts)
  console.log("getting all")
}

const show =  (req, res)=>{
  console.log(req)
  console.log(parseInt(req.params.id))
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i]._id === parseInt(req.params.id)){
      res.json(contacts[i])
    }
  }
};
const create = (req, res)=>{
    console.log(req)
  //   // console.log(req.body)
  
    req.body._id = contacts.length+1;
    req.body.postId = 1;
    contacts.push(req.body);
    res.send("Post Added")
  };
module.exports = {
  list,
  show,
  create
}