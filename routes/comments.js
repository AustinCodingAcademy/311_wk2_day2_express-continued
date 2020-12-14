const express = require('express')
const router = express.Router()

// import control
const commentsControl = require("../controllers/comments")

router.get("/comments", commentsControl.list)
router.get("/comments/:id", commentsControl.show)
router.post("/comments", commentsControl.create)

module.exports = router;