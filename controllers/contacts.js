const contacts = require("../data/contacts");

// used for the create part of the assignment
// let contactsCounter = contacts.length 

const displayAllContacts = (req,res) => {
    res.json(contacts);
};

function display1contact (req, res) {
    const id = req.params.id;
    const foundContact = contacts.find(contact => contact._id === Number(id))
    res.json(foundContact);
}

// used for the create part of the assignment
// function create(res) {
//     newUser {
//         id: contactsCounter + 1;
//     }
// }


module.exports = {
    displayAllContacts,
    display1contact
}