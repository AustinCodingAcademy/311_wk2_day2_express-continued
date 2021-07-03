const contacts = require('../data/contacts');

const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  let contact = contacts.find(contact => contact._id == req.params.id)
  res.json(contact)
}

const create = (req, res) => {
  let newContactId = contacts.length + 1;

  let newContact = {
    _id: newContactId,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }
  
  contacts.push(newContact)

  res.json(contacts)
}

module.exports = { list, show, create }