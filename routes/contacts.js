const express = require('express')
const router = express.Router()

// import control
const contactsControl = require("../controllers/contacts")

router.get("/contacts", contactsControl.list)
router.get("/contacts/:id", contactsControl.show)
router.post("/contacts", contactsControl.create)

module.exports = router;