const express = require('express');
const commentsRouter = express.Router();
const commentController = require('../controllers/comments.js')


commentsRouter.get('/comments/:id', commentController.findComment);
commentsRouter.get('/comments', commentController.findAllComments)
commentsRouter.post('/comments', commentController.makeComment)

module.exports = commentsRouter;