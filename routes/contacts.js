const express = require('express');
const router = express.Router();
const {displayContacts, showContacts, postContacts} = require('../controllers/contacts')

router.get("/contacts", displayContacts);

router.get("/contacts/:id", showContacts);

router.post("/contacts", postContacts);

module.exports = router;