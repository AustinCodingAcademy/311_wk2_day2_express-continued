const express = require('express');
const router = express.Router();

//import the comments array
const comments = require('../data/comments');
let counter = comments.length;

//COMMENTS
app.get('/comments', (req, res) => {
    res.json(comments)
})
app.get('/comments/:id', (req, res) => {
	let comment = comments.find(c => c._id === req.params.id)
    res.json(comment)
})
app.post('/comments', (req, res) => {
	let newComment = req.body;
	//newComment._id = counter + 1;
	comments.push(newComment);
	res.json(newComment);
})
