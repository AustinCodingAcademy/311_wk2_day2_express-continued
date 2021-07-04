const express = require('express')
const router = express.Router()

const proconch = require("../controller/contacts")

router.get("/contacts", proconch.list)

router.get("/contacts/:id", proconch.show)

router.post("/contacts", proconch.create)

module.exports = router
