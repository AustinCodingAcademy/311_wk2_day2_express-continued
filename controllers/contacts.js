const contacts = require("../data/contacts");


exports.list = function (request, response) {
  return response.json(contacts);
}

exports.show = function (req,res) {
  let id = contacts.find(i => i._id == req.params.productsId);
  res.json(id)
}

exports.create = function (req,res) {
  let newContact = req.body;
  contacts.push(newContact)
  res.json(newContact)
}