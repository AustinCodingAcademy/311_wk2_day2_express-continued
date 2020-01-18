const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/contacts')

// Get ALL things
router.get('/', contactsController.list)

// Get ONE thing
router.get('/:id', contactsController.show)

// Create ONE thing
router.post('/:id', contactsController.create)

module.exports = router;