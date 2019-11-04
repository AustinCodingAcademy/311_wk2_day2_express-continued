const contacts = require('../data/contacts');

//list
exports.list = function list(res, req) {
  res.json(contacts);
}
// show
exports.show = function show(res, req) {
  let contact = contacts.find(i => i._id == req.params.id);
  res.json(contact);
}
// create
exports.create = function create(res, req) {
  let body = req.body;
  let newContact = {
    _id: contacts.length + 1,
    name: body.name,
    occupation: body.occupation,
    avatar: body.avatar
  }

  contacts.push(newContact);
}