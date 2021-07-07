const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

//Get All Things
router.get('/', commentsController.list)

//Get One Thing
router.get('/:id', commentsController.show)

//Create One Thing
router.post('/:id', commentsController.create)

module.exports = router;