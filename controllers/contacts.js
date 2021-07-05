const contacts = require("../data/contacts")

// this function looks for contacts
const show = (req, res) => {
    // this function will tell whether contacts exist
    const foundContacts = contacts.some(
        contacts => contacts._id === parseInt(req.params.id)
    );
    // and if contacts are found... 
    if (foundContacts === true) {
        res.json(
            contacts.filter(comment => comment.id === parseInt(req.params.id))
        );
    // if it doesn't find that comment...
    } else {
        res.status(400).json({msg: `Comment ${req.params.id} does not exist.`})
    }
};

const list = (req, res) => {
    res.json(contacts);
};

const create = (req, res) => {
    res.send(req.body);
};

module.exports = { list, show, create }