const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));
const controllerContacts = require(('../controllers/contacts'))

//GET CONTACTS
router.get('/contacts', controllerContacts.list)

//GET Contacts by ID
router.get('/contacts/:id', controllerContacts.show)

//post Vehicles
router.post('/contacts', controllerContacts.create)

module.exports = router
