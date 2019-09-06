const contacts = require("../data/contacts");

const show = (req, res) => {
  const found = contacts.some(
    contact => contact._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      contacts.filter(contact => contact._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No contact with the id of ${req.params.id}` });
  }
};
const list = (req, res) => res.json(contacts);

const create = (req, res) => {
  res.send(req.body);
};

module.exports = { list, show, create };
