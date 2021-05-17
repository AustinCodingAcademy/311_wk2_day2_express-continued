const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));
const commentController = require('../controllers/comments')


//GET Comments
router.get('/comments', commentController.list)

//GET Comments by ID
router.get('/comments/:id', commentController.show)

//post Comments
router.post('/comments', commentController.create)

module.exports = router