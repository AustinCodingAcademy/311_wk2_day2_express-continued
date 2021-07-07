const express = require('express')
const router = express.Router()
const productsController = require('../controllers/contacts')


let contactsCounter = contacts.length;

router.get("/contacts", (req, res) => {
  res.json(contacts);
})

router.get("/contacts/:id", (req, res) => {
  const contact = contacts.find((c) => c._id == req.params.id)
  res.json(contact);
})

router.post("/contacts", (req, res) => {
  const newContact = req.body;
  contactsCounter = contactsCounter+1;
  newContact._id = contactsCounter;
  contacts.push(newContact);
  res.json(newContact);
})

module.exports = router