const express = require('express')
const router = express.Router()
// const contacts = require('../data/contacts.js')
const contactController = (require('../controllers/contacts'))
router.get('/contacts', contactController.list)
router.get('/contacts/:id', contactController.show)
router.post('/contacts', contactController.create)
module.exports = router