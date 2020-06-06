const express = require('express')
const router = express.Router()
const contacts = require('../data/contacts')
// const { list, create} = require('../controllers')

router.get('/contacts', (req, res) => {
    res.json(contacts)
  })

router.get('/contacts/:id', (req, res) => {
    let getId = contacts.find(user => user._id === parseInt(req.params.id))
    res.json(getId)
  })

router.post('/contacts', (req, res) => {
    const newContact = {
        _id: req.body._id,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    
    contacts.push(newContact)
    res.json(contacts)
    
    })

module.exports = router