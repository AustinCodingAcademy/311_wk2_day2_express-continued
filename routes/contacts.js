const express = require('express')
const router = express.Router()

const { contacts } = require('../data/contacts');
let contactsCounter = contacts.length;

router.use((req, res, next) => {
  if(req.path === "/contacts" && req.method === "GET") {
    return res.json(contacts)
  }
  next()
})

router.get('/contacts/:contactIds', (req, res) => {
  let contact = contacts.find(p=>p._id == req.params.contactIds);

  res.json(contact)
})

router.post('/contacts', (req, res) => {
  let contact = req.body;
  let newUserId = contactsCounter + 1;
  contactsCounter = contactsCounter + 1;

  req.body._id = newUserId;

  contacts.push(contact);

  res.json({user: contact})
})

module.exports = router;