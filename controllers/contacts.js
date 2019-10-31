const contacts = require('../data/contacts');

const list = (req, res) => {
  res.json(contacts);
};
const show = (req, res) => {
  let contact = contacts.find(item => item._id == req.params.id);
  if (contact)
    res.json(contact);
  else
    res.status(400).send(`There is no contact with id: ${req.params.id}`);
};
const create = (req, res) => {
  let newID = contacts.length + 1;
  req.body._id = newID;
  req.body.postID = 1;
  contacts.push(req.body);
  res.json(contacts);
};
module.exports = { list, show, create };