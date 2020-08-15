const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments-controllers')

router.get('/comments', commentsController.getAllComments)

router.post('/comments', commentsController.createComment)

router.get('/comments/:id', commentsController.getOneComment)

router.put('/comments/:id', commentsController.updateComment)

router.delete('/comments/:id', commentsController.deleteComment)


module.exports = router