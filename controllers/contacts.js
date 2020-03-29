let contacts = require("../data/contacts");
let lastContactsId = contacts.length;


const list = (req, res) => {
    res.json(contacts);
};

const show = (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
};

const create = (req, res) => {
    let newEntry = req.body;
    lastContactsId++;
    newEntry._id = lastContactsId;
    contacts.push(newEntry);
};

module.exports = { list, show, create };