let contacts = require("../data/contacts");
let lastContactsId = contacts.length;


exports.list('/contacts', (req, res) => {
    res.json(contacts);
});

exports.show('/contacts/:id', (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
});

exports.create('/contacts', (req, res) => {
    let newEntry = req.body;
    let newId = lastContactsId++;
    newEntry._id = newId;
    contacts.push(newEntry);
});

module.exports { list, show, create };