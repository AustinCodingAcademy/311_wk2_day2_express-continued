  
const contacts = require('../data/contacts')
let contactCounter = contacts.length;

const list = (req, res) => {
  res.json(contacts)
 };

const show = (req, res) => {
  let idSearched = req.params.id
  const contact = contacts.find(contact => 
  contact._id == idSearched)
  res.json(contact)
 };

const create = (req, res) => {
  let contact = req.body;
  contactCounter += 1
  contact._id = contactCounter
  contacts.push(contact)
  res.json(contacts)
 };



module.exports = { list, show, create }