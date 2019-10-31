const contacts = require('../data/comments');
let contCounter = contacts.length +1;

// Gets a list of all contacts
const list = (req, res) => {
    res.json(contacts);
}


// Gets a contact by ID
const show = (req, res) => {
    let contactId = contacts.find(x => x._id == req.params.id);
    if(contactId) {
        res.json(contactId);
    } else {
        res.status(400).send(`Contact number ${req.params.id} does not exist.`)
    }
}

// Creates a new contact
const create = (req, res) => {
    res.json(contacts.push({
        "_id": contCounter++,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": req.body.avatar        
    }))
}

module.exports = {list, show, create}
