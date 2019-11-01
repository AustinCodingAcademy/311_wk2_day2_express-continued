const contacts = require('../data/contacts')
let counter = contacts.length;


 const list = (req, res) => {
  return res.json(contacts)
}

const show = (req,res)=>{
  let getContact = users.find(getContact => getContact._id === parseInt(req.params.id))
  res.json(getContact);
}

const create = (req,res)=>{
  let createContact = req.body;
  contacts.push(createContact);
  createContact._id = counter++;
  res.json(createContact)
}

module.exports = {list,show,create}