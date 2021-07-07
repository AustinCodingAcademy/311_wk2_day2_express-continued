const express = require('express')
const router = express.Router()

const contactController = require('../controller/contacts')

router.get('/data/contacts', contactController.list)
router.get('/data/contacts/:id', contactController.show)
router.post('/data/contacts', contactController.create)

module.exports = router