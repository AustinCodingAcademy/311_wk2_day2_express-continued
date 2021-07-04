const contacts = require("../data/contacts");

module.exports.list = function(req, res) {
return res.json(contacts);
}

module.exports.show = function(req, res) {
  res.json(contacts.find(item => item._id == req.params.id))
}

module.exports.create = function(req, res) {
  const nub = {
    _id:contacts.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  contacts.push(nub)
  return res.json(nub)
}