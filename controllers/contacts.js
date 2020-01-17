const contacts = require('../data/contacts')
let contactCounter = contacts.length;

const list = (req, res) => {
  res.json(contacts)
 };

const show = (req, res) => {
  let idSearched = req.params.id
  const contact = contacts.find(contact=>contact._id == idSearched)
  res.json(contact)
 };

const create = (req, res) => {
  let newContact = req.body;
  contactCounter += 1
  newContact._id = contactCounter
  contacts.push(newContact)
  res.json(contacts)
 };



module.exports = { list, show, create }