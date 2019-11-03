const express = require('express')
const contacts = require("../data/contacts")
const contactRoutes = express.Router()

//route.get()
contactRoutes.get('/contacts', (req, res) => {
  res.json(contacts);
})

//route.get(/:userId`)
contactRoutes.get('/contacts/:userId', (req, res) => {
  let contactsId = parseInt(req.params.userId)
  let contactsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < contacts.length; i++) {
    if (i + 1 === contactsId)  {
      res.json(contacts[contactsIndex])
    }   
  }
})

//route.post()
contactRoutes.post('/contacts', (req, res) => {
  contacts.push(req.body); 
  let newContact = contacts[contacts.length -1]
  newContact._id = counter
  counter++
  console.log(req.body)
  res.json(newContact)
})

module.exports = contactRoutes;