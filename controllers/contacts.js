const contacts = require("../data/contacts")

const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  contacts.forEach(contacts => {
    if (contacts._id == req.params.id) {
      res.json(contacts)
    }
  })
}

const create = (req, res) => {
  let counter = ++contacts.length
  let postId = counter
  req.body.push(postId)
  contacts.push(req.body)
  res.json(contacts[contacts.length - 1])
}

module.exports = { list, show, create }
