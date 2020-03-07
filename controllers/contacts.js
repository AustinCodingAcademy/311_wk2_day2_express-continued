const contacts = require('../data/contacts');

// let contactsCounter = contacts.length;

const list = (req, res)=> {
    res.json(contacts);
}
const show = (req, res)=>{
    const id = req.params.id;
    const found = contacts.find(contact => contact._id === Number(id));
    res.json(found);
}
const create = (req, res)=>{
    const id = contacts.length + 1;
    let user = {
        ...req.body,
        _id: id,
    }
    contacts.push(user);
    res.json(contacts[contacts.length - 1])
}

module.exports = {
    list, show, create
}