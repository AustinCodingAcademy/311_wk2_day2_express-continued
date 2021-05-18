const express = require('express');
const contactsRouter = express.Router();
const contactsController = require('../controllers/contacts');

contactsRouter.get('/contacts/:id', contactsController.findContact);

contactsRouter.get('/contacts', contactsController.findAllContacts);

contactsRouter.post('/contacts', contactsController.postContact);

module.exports = contactsRouter;