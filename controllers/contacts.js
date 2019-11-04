const { contacts } = require("../data/contacts");

//get all
function getAll(req, res) {
  return res.json(contacts);
}
// get one
function getOne(req, res) {
  let contact = contacts.find(
    contact => contact._id === parseInt(req.params.id)
  );

  if (contact !== undefined) {
    return res.json(contact);
  } else {
    return res.json({ msg: `Contact ID #${req.params.id} does not exist...` });
  }
}
// post new
function postNew(req, res) {
  let counter = contacts.length;
  let newContact = {
    _id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  contacts.push(newContact);
  res.json(contacts);
}

module.exports = { getAll, getOne, postNew };
