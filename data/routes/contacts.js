const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/contacts')

//Get All Things
router.get('/', contactsController.list)

//Get One Thing
router.get('/:id', contactsController.show)

//Create One Thing
router.post('/:id', contactsController.create)

module.exports = router;