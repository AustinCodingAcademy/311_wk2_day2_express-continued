const express = require('express');
const router = express.Router();
const ContactsControllers = require('../controllers/contacts');


router.get('/contacts', ContactsControllers.list);

router.get('/contacts/:id', ContactsControllers.show);
 
router.post('/contacts', ContactsControllers.create);
 
module.exports = router;
