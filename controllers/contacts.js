const { contacts } = require('../data/contacts');
let contactsCounter = contacts.length;

const list = (req, res) => res.json(contacts);

const show =  (req, res) => {
  let contact = contacts.find(p=>p._id == req.params.contactIds);
  res.json(contact)
}

const create = (req, res) => {
  let contact = req.body;
  let newUserId = contactsCounter + 1;
  contactsCounter = contactsCounter + 1;

  req.body._id = newUserId;

  contacts.push(contact);

  res.json({user: contact})
}

module.exports = {list, show, create}