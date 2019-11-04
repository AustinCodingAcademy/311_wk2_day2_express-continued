const contacts = require('../data/contacts');

//list
exports.list = function list(req, res) {
  // res.json(contacts);
  res.json(contacts);
}
// show
exports.show = function show(req, res) {
  let contact = contacts.find(i => i._id == req.params.id);
  res.json(contact);
}
// create
exports.create = function create(req, res) {
  let body = req.body;
  let newContact = {
    _id: contacts.length + 1,
    name: body.name,
    occupation: body.occupation,
    avatar: body.avatar
  }

  contacts.push(newContact);
}