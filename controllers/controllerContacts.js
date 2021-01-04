const dContacts = require('../data/contacts')


//Get Requests
const list = (req,res) => {
    res.json(dContacts)
}

const listById = (req,res) => {
    let id = req.params.id - 1;
    res.json(dContacts[id])
}


//Post Requests
const post = (req,res) => {
    let newContact = req.body;
    newContact._id = dContacts.length + 1;
    dContacts.push(newContact)
    res.json(dContacts)
}


module.exports = {
    list, listById, post
}