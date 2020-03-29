const express = require('express');
const router = express.Router();


let comments = require("../data/comments");
let lastCommentsId = comments.length;


router.get('/comments', (req, res) => {
    res.json(comments);
});

router.get('/comments/:id', (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
});

router.post('/comments', (req, res) => {
    let newEntry = req.body;
    let newId = lastCommentsId++;
    newEntry._id = newId;
    comments.push(newEntry);
});

module.exports = router;