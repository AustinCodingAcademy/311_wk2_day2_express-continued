const contacts = require("../data/contacts")

let counter = contacts.length +1

const list = (req, res) => {
    res.json(contacts);
}

const show = (req, res) => {
    let contactsId = parseInt(req.params.userId)
    let contactsIndex = parseInt(req.params.userId) - 1;
    
    for (let i = 0; i < contacts.length; i++) {
      if (i + 1 === contactsId)  {
        res.json(contacts[contactsIndex])
    }   
  }
}

const create = (req, res) => {
    const newContact = {
    _id: counter,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
    }
    contacts.push(newContact); 
    counter = counter++
    console.log(req.body)
    res.json(newContact)
  }

module.exports = { list, show, create }