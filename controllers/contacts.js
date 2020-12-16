const contacts = require("../data/contacts")

const list = (req, res) => {
    return res.json(contacts)
};

const show = (req, res) => {
    let id = req.params.id - 1;
    return res.json(contacts[id])
};

const create = (res, req) => {
    let counter = contacts.length;
    let contactNew = req.body;
    contactNew._id = counter + 1;
    contacts.push(contactNew);
    let counterContact = contacttNew._id -1;
    return res.json(contacts[counterContact])
}

module.exports = {
    list,
    show,
    create
};