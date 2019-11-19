const express = require('express');
const router = express.Router();
const comments = require("../data/comments");
const commentCounter = comments.length;


router.get('/comments', (req, res) => {
    res.json(comments)
})


router.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment._id === Number(id))
    res.json(comment)
})

router.post('/comments', (req, res) => {
    comments.push({
        _id: commentCounter + 1,
        body: req.body.body,
        postId: 1
    })
    res.json(comments)
})



module.exports = router

