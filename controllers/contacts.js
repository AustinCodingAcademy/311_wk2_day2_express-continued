const { comments } = require('../data');

module.exports = {
    list: (req, res) => { res.json(contacts) },
    show: (req, res) => {
        res.json(contacts.find(contact => contact._id === parseInt(req.params.id)))
    },
    create: (req, res) => {
        const addInfo = {
            ...req.body,
            _id: contacts[contacts.length - 1]._id + 1
        }
        
        contacts.push(addInfo);
        res.json(addInfo);
    }
}