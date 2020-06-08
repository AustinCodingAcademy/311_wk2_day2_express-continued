const contacts = require('../data/contacts')
let counter = 1

const list = (req,res)=>{
  res.json(contacts)
}

const getOne = (req,res)=>{
  let contactIdString = req.params.contactId
  let contactId = parseInt(contactIdString)
  for(let i = 0; i< contacts.length;i++){
    if(contacts[i]._id === contactId){
      return res.json(contacts[i])
    }
  }
}

const post = (req,res)=>{
  let user = {
    _id : 8,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar : req.body.avatar
  }
  contacts.push(user)
  for(let i = 0; i<contacts.length; i++){
    contacts[i]._id = counter + contacts.indexOf(contacts[i])
  }
  return res.json(contacts)
}

module.exports = {list : list, getOne , post}