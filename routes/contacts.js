const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts')

//require controller here

router.get('/contacts', contactsController.contactsList)

router.get('/contacts/:id', contactsController.contactsListById)

router.post('/contacts', contactsController.createContact)

module.exports = router;