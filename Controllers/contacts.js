const contacts = require('../data/contacts')

const list = (req, res) => {
    res.json(contacts)
  }

const show = (req, res) => {
    let getId = contacts.find(user => user._id === parseInt(req.params.id))
    res.json(getId)
  }


const create = (req, res) => {
    let counter = contacts.length + 1 
    const newContact = {
        postId : 1,
        _id: req.body._id,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    
    newContact.postId = counter
    contacts.push(newContact)
    res.json(contacts)
    
    }

module.exports = {list, show, create}