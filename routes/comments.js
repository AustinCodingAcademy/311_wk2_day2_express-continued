const express = require('express')
const router = express.Router()

const proconch = require("../controller/comments")

router.get("/comments", proconch.list)

router.get("/comments/:id", proconch.show)

router.post("/comments", proconch.create)

module.exports = router
