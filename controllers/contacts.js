const contacts = require("../data/contacts")

function list(req, res) {
    res.json(contacts)
}

function show(req, res) {
    contacts.forEach(contact => {
        if(contact._id == req.params.id) {
            return res.json(contact)
        }
    })
    return res.send("no contact found")
}

function create(req, res) {
    let counter = contacts.length
    contacts.push({
        "_id": ++counter,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": "none",
        "postID": 1
    })
    res.json(contacts[contacts.length -1])
}

module.exports = {list, show, create}