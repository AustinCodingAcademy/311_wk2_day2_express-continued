const contacts = require('./data/contacts');

const list = (request, response) =>{
  response.json(contacts);
}

const show = (request, response) => {
  let id = request.params.id;
  return response.json(contacts.find(x => x._id === parseInt(id)));
}

const create = (request, response) => {
  request.body._id = contacts.length;
  request.body._id++;
  contacts.push(request.body);
  return response.json(contacts);
}

module.exports = {
  list,
  show,
  create
}