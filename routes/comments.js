const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

router.get("/data/comments", commentsController.list)

router.get("/data/comments/:id", commentsController.show)

router.post('/data/comments', commentsController.create)

module.exports = router;