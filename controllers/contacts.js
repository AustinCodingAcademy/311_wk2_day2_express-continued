const contacts = require("../data/contacts");

const list = (req, res) => res.json(contacts);

const show = (req, res) => {
  const singleItemById = parseInt(req.params.id);
  console.log(singleItemById);
  const oneContact = res.json(
    contacts.find(contact => contact._id === singleItemById)
  );
  res.json(oneContact);
};

// ID Base Number Variables
let contactIdBase = contacts.length + 1;

const create = (req, res) => {
  const newContact = {
    _id: contactIdBase++,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
    postId: 1
  };
  contacts.push(newContact);
  res.json(contacts);
};

module.exports = { list, show, create };
