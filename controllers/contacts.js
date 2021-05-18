const contacts = require('../data/contacts');

function findContact (req, res) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]._id == req.params.id) {
            res.json(contacts[i]);
        }
    }
}

function findAllContacts (req, res) {
    res.json(contacts);
}

function postContact (req, res) {
    req.body._Id = contacts.length;
    req.body.postID = 1;
    contacts.push(req.body);
    console.log(contacts);
}

module.exports = {findContact, findAllContacts, postContact};