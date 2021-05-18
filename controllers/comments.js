const comments = require("../data/comments");

function findComment (req, res) {
    for (let i = 0; i < comments.length; i++) {
        if (req.params.id == comments[i]._id) {
            res.json(comments[i]);
        }
    }
}

function findAllComments (req, res) {
    res.json(comments);
}

function makeComment (req, res) {
    req.body._id = comments.length;
    req.body.postId = 1;
    comments.push(req.body);
    console.log(comments);
}

module.exports = {findComment, findAllComments, makeComment};