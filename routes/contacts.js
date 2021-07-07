// Contacts Routes File

const express = require("express")
const router = express.Router();
const contactsController = require ("../controllers/contacts")


router.get ("/contacts", contactsController.displayAllContacts);
router.get ("/contacts/:id", contactsController.display1contact);
router.post ("/contacts", contactsController.create);





module.exports = router;


