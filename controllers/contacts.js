const contacts = require('../data/contacts');

//get
const contactsList = (req, res) => {
    res.json(contacts)  
}

//get
const contactsListById = (req, res) => {  
  const found = contacts.some(contact => contact._id == req.params.id);
  if(found){
    res.send(contacts.filter(contact => contact._id == req.params.id))
  }else{
    res.status(404).json({msg: 'User not found'});
  }
}


//post
const createContact = (req, res) => { 
  counter = contacts.length;
  const newContact = {
      _id: counter+1, 
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar,
  }

  if(!newContact.name || !newContact.occupation){
    return res.status(400).json({ msg: 'Please include a name and occupation'});
  }

  contacts.push(newContact);
  res.json(contacts)
}



module.exports = { contactsList, contactsListById, createContact };