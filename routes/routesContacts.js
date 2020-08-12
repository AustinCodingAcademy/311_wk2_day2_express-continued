const express = require('express');
const router = express.Router();
let controllerContacts = require('../controller/controllerContacts');

router.get('/', controllerContacts.contactsGet);
router.get('/:id', controllerContacts.contactsGetId);
router.post('/', controllerContacts.contactsPost);
router.put('/:id', controllerContacts.contactsPut);
router.delete('/:id', controllerContacts.contactsDelete);

module.exports = router;