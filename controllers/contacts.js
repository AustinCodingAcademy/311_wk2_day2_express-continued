
const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
}

const show = (req, res) => {
  let contactId = parseInt(req.params.id);
  let thisContact = contacts.find(contact => contact._id === contactId)
  res.json(thisContact);
}

const create = (req, res) => {
  let id = contacts.length + 1;
  let newContact = {
    _id: id,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }
  contacts.push(newContact);
  res.json(contacts);
}

module.exports = {
  list, show, create
}