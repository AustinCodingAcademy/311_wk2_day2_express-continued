const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const contactsController = require("../controllers/contacts")

//CONTACTS REQUESTS

router.get("/contacts", contactsController.list)

router.get("/contacts/:id", contactsController.show)

router.post("/contacts", contactsController.create)

module.exports = router
