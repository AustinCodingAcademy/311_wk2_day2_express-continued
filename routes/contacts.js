const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const contacts = require('../data/contacts')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

let counter = 1

router.get('/contacts',(req,res)=>{
  res.json(contacts)
})

router.get('/contacts/:contactId',(req,res)=>{
  let contactIdString = req.params.contactId
  let contactId = parseInt(contactIdString)
  for(let i = 0; i< contacts.length;i++){
    if(contacts[i]._id === contactId){
      return res.json(contacts[i])
    }
  }
})

router.post('/contacts',(req,res)=>{
  console.log(req.body)
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
})

module.exports = router