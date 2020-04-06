const contacts = require ('../data/contacts')
contactCounter = contacts.length;

const list = (req, res) => {
    return res.json(contacts);
   }

   const show = (req, res) => {
    const id = req.params.id;
    const contact = contacts.find(contact => contact._id === Number(id))
    res.json(contact)
    //res.json(contacts.find(i => i._id === parseInt(id)));
   }

   const create =  (req, res) =>{
    let newContact = {
        _id: contactCounter + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
        
    }
    contacts.push(newContact)
}

module.exports = {
    list,
    show,
    create
}