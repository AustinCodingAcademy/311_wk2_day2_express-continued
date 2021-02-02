const contacts = require("../data/contacts.js")

const list = (req, res) => {
  return res.json(contacts)
}

const show = (req, res) => {
  let targetId = req.params.id -1
  return res.json(contacts[targetId])
}

const create = (req, res) => {
  let counter = contacts.length
  let contact = req.body
  contact._id = counter + 1
  contacts.push(contact)
  return res.json(contacts[contact._id])
}

module.exports = {list, show, create}