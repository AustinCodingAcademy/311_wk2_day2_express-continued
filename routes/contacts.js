const express = require('express');
const router = express.Router();

const contacts = require("../data/contacts");

// Routes to all elements in each array
router.get("/contacts", (req, res) => res.json(contacts));

// Routes to single element in each array
router.get("/contacts/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  console.log(singleItemById);
  const oneContact = res.json(
    contacts.find(contact => contact._id === singleItemById)
  );
  res.json(oneContact);
});

// POST Section
// ID Base Number Variables
let contactIdBase = contacts.length + 1;

// Routes to POST new item into Array
router.post("/contacts", (req, res) => {
  const newContact = {
    _id: contactIdBase++,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
    postId: 1
  };
  contacts.push(newContact);
  res.json(contacts);
});

module.exports = router;