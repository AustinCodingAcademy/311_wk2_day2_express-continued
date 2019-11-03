const express = require('express')
// const comments = require("../data/comments")
const commentRoutes = express.Router()
const commentController = require("../controllers/comments")

//route.get()
commentRoutes.get('/comments', commentController.list)

//route.get(/:userId`)
commentRoutes.get('/comments/:userId', commentController.show)

//route.post()
commentRoutes.post('/comments', commentController.create)

module.exports = commentRoutes;