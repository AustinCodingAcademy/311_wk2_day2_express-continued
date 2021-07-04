const express = require('express')
const router = express.Router()

const proconch = require("../controller/vehicles")

router.get("/vehicles", proconch.list)

router.get("/vehicles/:id", proconch.show)

router.post("/vehicles", proconch.create)

module.exports = router
