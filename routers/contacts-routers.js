const express = require('express')
const router = express.Router()

const contactsControllers = require('./../controllers/contacts-controllers')


router.get('/contacts', contactsControllers.listContact)

router.post('/contacts', contactsControllers.createContact)

router.put('/contacts/:userId', contactsControllers.updateContact)

router.delete('/contacts/:userId', contactsControllers.deleteContact)

router.get('/contacts/:userId', contactsControllers.showContact)



module.exports = router 

