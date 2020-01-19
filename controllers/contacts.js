let contacts = require("../data/contacts");

// get - returns all
exports.list = function list(req, res) {
  return res.json(contacts);
}

// get by id
exports.show = function show(req, res) {
  res.json(contacts.find(contacts => contacts._id === parseInt(req.params._id))); 
}

// post 
exports.create = function create(req, res) {
  const newContact = {
    _id: ++counter,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }; 
    contacts.push(newContact);
    res.json(contacts);
}

module.exports = { list, show, create }