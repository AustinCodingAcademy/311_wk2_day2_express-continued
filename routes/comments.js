const express = require('express')
const router = express.Router()

const commentController = require('../controller/comments')

router.get('/data/comments', commentController.list)
router.get('/data/comments/:id', commentController.show)
router.post('/data/comments', commentController.create)

module.exports = router