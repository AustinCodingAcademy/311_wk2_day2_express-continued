let contacts = require('../data/contacts');
let counter = contacts.length;

exports.contactsGet = function(req, res) {
    res.json(contacts);
};

exports.contactsGetId = function(req, res) {
    res.json(contacts.filter(contact => contact._id == req.params.id));
};

exports.contactsPost = function(req, res) {
    let postContact = req.body;
    let newContact = {
        _id: ++counter,
        name: postContact.name,
        occupation: postContact.occupation,
        avatar: postContact.avatar
    };
    contacts.push(newContact);
    res.send(contacts);
};

exports.contactsPut = function(req, res) {
    let _id = req.params.id;
    let putContact = req.body;
    let n = contacts.findIndex(contact => contact._id == _id)
    contacts[n].name = putContact.name ? putContact.name : contacts[n].name;
    contacts[n].occupation = putContact.occupation ? putContact.occupation : contacts[n].occupation;
    contacts[n].avatar = putContact.avatar ? putContact.avatar : contacts[n].avatar;
    res.json(contacts);
};

exports.contactsDelete = function(req, res) {
    let _id = req.params.id;
    let n = contacts.findIndex(contact => contact._id == _id);
    contacts.splice(n, 1)
    res.json(contacts);
};