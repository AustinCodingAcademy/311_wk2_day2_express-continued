const express = require('express')
const router = express.Router()
const commentsController = require('./../controllers/comment.controllers')

router.get('/comments',commentsController.listcomment)


router.get('/comments/:commentId',commentsController.showComment)


router.post('/comments',commentsController.createComment)


router.put('/comments/:commentId',commentController.updateComment)


router.delete('/comments/:commentId',commentController.deleteComment)

module.exports = router