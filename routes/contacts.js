const express = require('express');
const router = express.Router();

// set access to our controller
const controller = require('../controllers/contacts');

// define the paths to the API methods on the controller

// show ALL the contacts!
router.get('/contacts', controller.list);

// show just one contact (by id)
router.get('/contacts/:id', controller.show)

// add a new contact!
router.post('/contacts',controller.create)

// make the router available to the API
module.exports = router