const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  let item = contacts.find((contact) => contact._id == req.params.id);
  res.json(item);
};

const create = (req, res) => {
  let counter = contacts.length + 1;

  let newContact = {
    "_id": req.body.counter,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar
  }

  contacts.push(req.body);
};

module.exports = { list, show, create }