const express = require('express');
const router = express.Router();
const { contacts } = require('../data/contacts');

// get all contacts
router.get("/contacts", (req, res) => {
  res.json(contacts);
});
// get one contact
router.get("/contacts/:id", (req, res) => {
  let contact = contacts.find(
    contact => contact._id === parseInt(req.params.id)
  );

  if (contact !== undefined) {
    return res.json(contact);
  } else {
    return res.json({ msg: `Contact ID #${req.params.id} does not exist...` });
  }
});
// create new contact
router.post("/contacts", (req, res) => {
  let counter = contacts.length;
  let newContact = {
    _id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  contacts.push(newContact);
  res.json(contacts);
});

module.exports = router;