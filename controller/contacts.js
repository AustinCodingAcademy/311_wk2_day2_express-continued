const contacts = require('../data/contacts')

const list = (req, res) => res.json(contacts)

const show = (req, res) => {
  res.json (contacts.find (x => {
    return +req.params.id === x._id
  }))
}

const create = (req, res) => {
  let newID = contacts.length + 1

  let newContact = {
    _id: newID,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }

  contacts.push(newContact)
  res.json(contacts)
}

module.exports = {
  list,
  show,
  create
}