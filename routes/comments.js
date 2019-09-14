const express = require('express');
const router = express.Router();

//import the comments array
const comments = require('../data/comments');
let counter = comments.length;

//COMMENTS
router.get('/comments', (req, res) => {
    res.json(comments)
})
router.get('/comments/:id', (req, res) => {
	let comment = comments.find(c => c._id === req.params.id)
    res.json(comment)
})
router.post('/comments', (req, res) => {
	let newComment = req.body;
	newComment._id = counter + 1;
	comments.push(newComment);
	res.json(newComment);
})

module.exports = router;