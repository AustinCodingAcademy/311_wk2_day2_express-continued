const contacts = require("../data/contacts.js");

const list = (req, res) => {
  return res.json(contacts);
};

const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(contacts[id]);
};

const create = (req, res) => {
  let counter = contacts.length;
  let newContact = req.body;
  newContact._id = counter + 1;
  contacts.push(newContact);
  return res.json(contacts[newContact._id - 1]);
};

module.exports = {
  list,
  show,
  create,
};
