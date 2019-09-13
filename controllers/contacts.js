const contacts = require("../data/contacts");
const list = (req, res) => {
  res.json(contacts);
};
const show = (req, res) => {
  const foundContact = contacts.some(
    contact => contact._id === parseInt(req.params.id)
  );

  if (foundContact) {
    res.json(
      contacts.filter(contact => contact._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no contacts with that id` });
  }
};

const create = (req, res) => {
  let contact1 = req.body;
  res.send(contact1);
  console.log(contact1);
};
module.exports = { list, show, create };
