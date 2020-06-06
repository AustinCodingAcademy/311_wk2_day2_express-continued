const express = require('express')
const router = express.Router()
const comments = require('../data/comments')

router.get('/comments', (req, res) => {
    res.json(comments)
  })

router.get('/comments/:id', (req, res) => {
    let getId = comments.find(user => user._id === parseInt(req.params.id))
    res.json(getId)
  })

router.post('/comments', (req, res) => {
    const newComments = {
        _id: req.body._id,
        body: req.body.body,
        postId: req.body.postId
    }
        
    comments.push(newComments)
    res.json(comments)
        
    })

module.exports = router