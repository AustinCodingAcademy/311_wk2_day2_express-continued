const contacts = require("../data/contacts");

const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const findContacts = contacts.find(
    (contact) => contact._id === parseInt(req.params.id)
  );
  res.json(findContacts);
};

const create = (req, res) => {
  let counter = contacts.length + 1;
  let newContact = {
    ...req.body,
    postId: counter,
  };
  newContact._id = counter;
  contacts.push(newContact);
  res.json({ msg: "New Contact Added!", contact: newContact });
};

module.exports = { list, show, create };
