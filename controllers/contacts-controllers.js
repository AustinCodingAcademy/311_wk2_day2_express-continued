
const contacts = require('./../data/contacts')
let counter = contacts.length + 1
//list function
const listContact = (req, res) => {
    res.json(contacts)
}
//create funtion
const createContact = (req, res) => {
    contacts.push({_id: counter++, ...req.body})
    res.json(contacts[contacts.length -1])
}

//update function
const updateContact = (req, res) =>{
    let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
    
    foundContact.name = req.body.name ? req.body.name : foundContact.name
    foundContact.occupation = req.body.occupation ? req.body.occupation : foundContact.occupation
    foundContact.avatar = req.body.avatar ? req.body.avatar : foundContact.avatar
    res.json(foundContact)
}
//delete
const deleteContact = (req, res) =>{
    let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
    if (foundContact) {
        foundContact.isActive = false
        res.send(`${req.params.userId} Deleted`)
    } else {
        res.status(400).json({ message: `No contact with Id of ${req.params.userId}`})
    }
    
}
//show function
const showContact = (req, res) =>{
   let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
   res.json(foundContact)
    
    
}

module.exports = {
    listContact,
    createContact,
    updateContact,
    deleteContact,
    showContact
}