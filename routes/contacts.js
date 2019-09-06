const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/Contacts");

router.get("/contacts/:id", contactsController.show);
router.post("/contacts", contactsController.create);
router.get("/contacts", contactsController.list);

module.exports = router;
