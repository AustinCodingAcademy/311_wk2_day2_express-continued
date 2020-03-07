const express = require('express');
const router = express.Router();
const contactsController = require("../controllers/contacts");
// const contacts = require('../data/contacts');

router.get("/contacts", contactsController.list);
router.get("/contacts/:id", contactsController.show);
router.post("/contacts/", contactsController.create);

module.exports = router;