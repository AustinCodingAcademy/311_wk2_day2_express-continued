const express = require('express')
const router = express.Router()

//Controller
const controllerContacts = require('../controllers/controllerContacts')

//Get requests
router.get('/', controllerContacts.list);
router.get('/:id', controllerContacts.listById)


//Post Requests
router.post('/', controllerContacts.post)

//Export
module.exports = router;