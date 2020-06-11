const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts'); 

// GET routes
router.get('/data/contacts', contactsController.list);

router.get('/data/contacts/:id', contactsController.show);

// POST routes
router.post('/data/contacts', contactsController.create);

module.exports = router;