const contacts = require('../data/contacts');

// COUNTER FUNCTION
const counterC = function() {
  let id = contacts.length;
  id++;
  return id;
};
// GET ARRAY
exports.list = function list(req,res) {
  return res.json(contacts);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let contact = contacts.find(arrObj => arrObj._id === usrID);

  console.log(contacts);
  res.json(contact);    
};
// POST ITEM
exports.create = function create(req,res) {
  const newContact = {
    _id: counterC(),
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
    status: 'active'
  };
  
  contacts.push(newContact);
  console.log(newContact);
  res.json(contacts);
};