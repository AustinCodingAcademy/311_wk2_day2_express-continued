const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts')
//const {list,show,create,update,remove} = require('../controllers/contacts')

//contactS
router.get('/contacts', contactsController.list)
router.get('/contact/:id', contactsController.show)
router.post('/contacts', contactsController.create)
// router.put('/contacts', update)
// router.delete('/contacts', remove)

module.exports = router;