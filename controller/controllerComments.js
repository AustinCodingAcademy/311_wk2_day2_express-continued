// controller/controllerComments.js
let comments = require('../data/comments');
let counter = comments.length;

exports.commentsGet = function(req, res) {
    res.json(comments);
};

exports.commentsGetId = function(req, res) {
    res.json(comments.filter(comment => comment._id == req.params.id));
};

exports.commentsPost = function(req, res) {
    let postComment = req.body;
    let newComment = {
        _id: ++counter,
        body: postComment.body,
        postId: postComment.postId
    };
    comments.push(newComment);
    res.send(comments);
};

exports.commentsPut = function(req, res) {
    let _id = req.params.id;
    let putComment = req.body;
    let n = comments.findIndex(comment => comment._id == _id)
    comments[n].body = putComment.body ? putComment.body : comments[n].body;
    comments[n].postId = putComment.postId ? putComment.postId : comments[n].postId;
    res.json(comments);
};

exports.commentsDelete = function(req, res) {
    let _id = req.params.id;
    let n = comments.findIndex(comment => comment._id == _id);
    comments.splice(n, 1)
    res.json(comments);
};