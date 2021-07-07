const contacts = require('../data/contacts');
let contactCounter = contacts.length;

const getAll = (req, res) => {
  res.json(contacts)
}

const getById = (req, res) => {
  let id = req.params.id;
  let contact = contacts.find(contact => contact._id == id);
  res.json(contact)
}

const create = (req, res) => {
  contactCounter++;
  let id = contactCounter;
  let body = req.body;
  body._id = id;
  contacts.push(body);
  res.json(body);
}

module.exports = {
  getAll,
  getById,
  create
}