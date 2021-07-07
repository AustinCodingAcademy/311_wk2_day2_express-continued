let comments = require("../data/comments");

// this package creates a unique ID for our POST calls
const uuidv1 = require('uuid/v1')

// show all the comments
const list = (req, res) => {
    res.json(comments);
};

// show just one comment
const show = (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
};

// add a comment
const create = (req, res) => {
    // create an object for the comment
    let newComment = {
        "_id": uuidv1(),
        "body": req.body.body,
        "postId": 1
    }
    // build the response string
    let jsonStr = comments;

    // if there's no comment, change the response string to a complaint
    if (!newComment.body) {jsonStr = "there's no comment!";}
    // otherwise add our comment
    else comments.push(newComment);

    // return the response string
    res.json(jsonStr);
};

module.exports = { list, show, create };