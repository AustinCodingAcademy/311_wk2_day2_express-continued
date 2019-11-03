const express = require('express')
// const contacts = require("../data/contacts")
const contactRoutes = express.Router()
const contactController = require("../controllers/contacts")

//route.get()
contactRoutes.get('/contacts', contactController.list)

//route.get(/:userId`)
contactRoutes.get('/contacts/:userId', contactController.show)

//route.post()
contactRoutes.post('/contacts', contactController.create)

module.exports = contactRoutes;