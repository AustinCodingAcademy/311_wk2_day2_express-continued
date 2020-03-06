const express = require("express")
const router = express.Router();
const contactsController = require ("../controllers/contacts")



router.get ("/contacts", contactsController.displayAllContacts);
router.get ("/contacts/:id", contactsController.display1contact)





module.exports = router;


