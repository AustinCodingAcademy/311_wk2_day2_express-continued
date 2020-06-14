const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')

router.get('/comments', commentsController.commentsList)

router.get('/comments/:id', commentsController.commentsListById)

router.post('/comments', commentsController.createComment)

module.exports = router;