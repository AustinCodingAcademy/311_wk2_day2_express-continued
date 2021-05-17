const express = require("express")
const router = express.Router()
const contactsController = require("../controllers/contacts")

//CONTACTS REQUESTS

router.get("/contacts", contactsController.list)

router.get("/contacts/:id", contactsController.show)

router.post("/contacts", contactsController.create)

module.exports = router
