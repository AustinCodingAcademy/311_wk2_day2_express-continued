const contacts = require('../data/contacts')

const list = (req, res) => {
  res.json(contacts);
}

const show = (req, res) => {
  let id = req.params.id -1;
  if (!contacts[id]) {
    res.send(`Contact id #${req.params.id} not found!`);
  } else {
    res.json(contacts[id]);
  }
}

const create = (req, res) => {
  let counter = contacts.length;
  req.body._id = counter +1;
  contacts.push(req.body);
  res.json(contacts);
}

module.exports = {list, show, create};