// Contacts Controllers File

const contacts = require("../data/contacts");
// let contactsCounter = contacts.length;

const displayAllContacts = (req,res) => {
    res.json(contacts);
};

function display1contact (req, res) {
    const id = req.params.id;
    const foundContact = contacts.find(contact => contact._id === Number(id))
    res.json(foundContact);
}

function create(req, res) {
    let newContact = {
        "_id": contacts.length+1,
        ...req.body
      }
    contacts.push(newContact);
    res.json(contacts[contacts.length -1])
    // res.send('success-jte')
}


module.exports = {
    displayAllContacts,
    display1contact,
    create
}