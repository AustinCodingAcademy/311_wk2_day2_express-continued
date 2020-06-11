const express = require('express');
const router = express.Router();
const contacts = require('../data/contacts')

// GET routes
router.get('/data/contacts', (req, res) => {
  res.json(contacts);
});

router.get('/data/contacts/:id', (req, res) => {
  let id = req.params.id -1;
  if (!contacts[id]) {
    res.send(`Contact id #${req.params.id} not found!`);
  } else {
    res.json(contacts[id]);
  }
});

// POST routes
router.post('/data/contacts', (req, res) => {
  let counter = contacts.length;
  req.body._id = counter +1;
  contacts.push(req.body);
  res.json(contacts);
});

module.exports = router;