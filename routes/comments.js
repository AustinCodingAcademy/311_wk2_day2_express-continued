const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

// Get ALL things
router.get('/', commentsController.list)

// Get ONE thing
router.get('/:id', commentsController.show)

// Create ONE thing
router.post('/:id', commentsController.create)

module.exports = router;
