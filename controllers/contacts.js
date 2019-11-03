const contacts = require('../data/contacts')
let counter = contacts.length;


 module.exports.list = (req, res) => {
  return res.json(contacts)
}

module.exports.show = (req,res) => {
  let getContact = users.find(getContact => getContact._id === parseInt(req.params.id))
  res.json(getContact);
}

module.exports.create = (req,res) => {
  let createContact = req.body;
  contacts.push(createContact);
  createContact._id = counter++;
  res.json(createContact)
}

