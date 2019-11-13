const contacts = require('../data/contacts');

function displayContacts(request,response) {
  return response.json(contacts);
}

function showContacts(request, response) {
  let foundContacts = contacts.find(function(element){
    return contacts._id == req.params.id
  })
  response.json(foundContacts)
}

function postContacts(request, response){
  req.body._id = product.length + 1
  contacts.push(req.body)
  resizeBy.json(contacts)
}

module.exports = {displayContacts, showContacts, postContacts};