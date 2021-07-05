const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');

// get all contacts
router.get("/contacts", contactController.getAll);
// get one contact
router.get("/contacts/:id", contactController.getOne);
// create new contact
router.post("/contacts", contactController.postNew);

module.exports = router;