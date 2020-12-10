const express = require("express");
const router = express.Router();
const contacts = require("../data/contacts.js");

router.get("/contacts", (req, res) => {
  return res.json(contacts);
});

router.get("/contacts/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(contacts[id]);
});

router.post("/contacts", (req, res) => {
  let counter = contacts.length;
  let newContact = req.body;
  newContact._id = counter + 1;
  contacts.push(newContact);
  return res.json(contacts[newContact._id - 1]);
});

module.exports = router;
