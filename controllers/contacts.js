const contacts = require('../data/contacts');

const list = (req, res) => {
    res.json(contacts);
}

const show = (req, res) => {
    let id = req.params.id;
    res.json(contacts.find(i => i._id === parseInt(id)));
}

const create = (req, res) => {
    req.body._id = contacts.length;
    req.body._id++;
    contacts.push(req.body);
    res.json(contacts);
}

module.exports = { list, show, create };