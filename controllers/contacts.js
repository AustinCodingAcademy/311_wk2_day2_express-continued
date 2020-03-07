const contacts = require("../data/contacts");
let contactCounter = contacts.length;

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const id = req.params.id;
  const foundContact = contacts.find(contact => contact._id === Number(id));
  res.json(foundContact);
};

const create = (req, res) => {
  let newContact = {
    _id: contactCounter + 1,
    body: req.body.body,
    postId: 1
  };
  contacts.push(newContact);
  res.json(contacts);
};
//I'm not sure why my contacts, vehicles, and products wont post but my comments does

module.exports = {
  list,
  show,
  create
};
