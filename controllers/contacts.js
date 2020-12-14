const contacts = require("../data/contacts")

// function for list
const list = (req, res) => {
  return res.json(contacts)
}

// function for show
const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(contacts[id])
};

// function for create
const create = (res, req) => {
  let counter =  contacts.length;
  let contactNew = req.body;
  contactNew._id = counter + 1;
  contacts.push(contactNew);
  let counterContact = contactNew._id -1;
  return res.json(contacts[counterContact])
}

//export modules
module.exports = {
  list,
  show,
  create
};
