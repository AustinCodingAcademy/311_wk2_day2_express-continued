const express = require('express');
const router = express.Router();

let contacts = require("../data/contacts");
let lastContactsId = contacts.length;


router.get('/contacts', (req, res) => {
    res.json(contacts);
});

router.get('/contacts/:id', (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
});

router.post('/contacts', (req, res) => {
    let newEntry = req.body;
    let newId = lastContactsId++;
    newEntry._id = newId;
    contacts.push(newEntry);
});

module.exports = router;