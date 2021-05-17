const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
const commentsController = require("../controllers/comments")

//COMMENTS REQUESTS

router.get("/comments", commentsController.list)

router.get("/comments/:id", commentsController.show)

router.post("/comments", commentsController.create)

module.exports = router
