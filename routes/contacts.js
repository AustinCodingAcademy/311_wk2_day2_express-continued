const express = require('express');
const router = express.Router();

//import the contacts array
const contacts = require('../data/contacts');
let counter = contacts.length;


//CONTACTS
app.get('/contacts', (req, res) => {
    res.json(contacts)
})
app.get('/contacts/:id', (req, res) => {
	let contact = contacts.find(c => c._id === req.params.id)
	console.log(contact)
    res.json(contact)
})
app.post('/contacts', (req, res) => {
	let newContact = req.body;
	//newContact._id = counter + 1;
	comments.push(newContact);
	res.json(newContact);
})
