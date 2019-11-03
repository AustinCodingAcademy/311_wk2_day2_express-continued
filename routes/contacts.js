const express = require("express");
const router = express.Router();
const contacts = require("../data/contacts");

app.get("/contacts", (req, res) => {
  res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
  const found = contacts.some(
    contact => contact._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      contacts.filter(contact => contact._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No contact with ${req.params.id} was found` });
  }
});

app.post("/contacts", (req, res) => {
  const newContact = {
    _id: counter(contacts) + 1,
    name: req.body.name,
    ocupation: req.body.ocupation,
    avatar: req.body.avatar,
    postId: 1
  };

  if (!newContact.name || !newContact.ocupation || !newContact.avatar) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  contacts.push(newContact);
  res.json(contacts);
});

module.exports = router;
