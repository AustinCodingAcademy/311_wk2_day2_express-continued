const contacts = require('../data/contacts');
let counter = contacts.length;

//get - return all contacts
const list = (req, res) => {
    res.json(contacts)
}
//get one contact
const show = (req, res) => {
    let contact = contacts.find(v => v._id == req.params.id);
    res.json(contact);
}
//post
const create = (req, res) => {
    let newContact = req.body;
	contacts.push(newContact);
    newContact._id = counter++;
    console.log(newContact._id)
	res.json(newContact);
}
//put
const update = (req, res) => {
    let contact = contacts.find(v => v._id === req.params.id);
    contact.make = body.make;
    res.json(contact);
}
//delete
const remove = (req, res) => {
    let contact = contacts.find(v => v._id === req.params.id);
    contact.isActive = false;
    res.send('contact deleted');
}

module.exports = {list, show, create, update, remove}