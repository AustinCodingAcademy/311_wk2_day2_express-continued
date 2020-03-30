let contacts  = require("../data/contacts");
// this package creates unique ids
const uuidv1 = require('uuid/v1')


// show all the contacts
const list = (req, res) => {
    res.json(contacts);
};

// show just one contact
const show = (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
};

// add a contact, but give an error if there's no name
const create = (req, res) => {
    let newContact = {
        "_id": uuidv1(),
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar" : req.body.avatar
    }
    
    // build the response string
    let jsonStr = contacts;
    if (!newContact.name) {jsonStr = "You forgot the name, genius"}
    else contacts.push(newContact);

    res.json(jsonStr);
};

// export these methods to the router
module.exports = { list, show, create };