const comments = require('../data/comments');
let commCounter = comments.length;


// Shows a list of all comments
const list = (req, res) => {
    res.json(comments);
}

// Gets one comment
const show = (req, res) => {
    let commentsId = comments.find(x => x._id == req.params.id);
    if(commentsId) {
        res.json(commentsId);
    } else {
        res.status(400).send(`ID ${req.params.id} does not exist.`)
    }
}

const create = (req, res) => {
    res.json(comments.push({
        "_id": commCounter+1,
        "body": req.body.body,
        "postId": req.body.postId
    }))
    res.json(comments);
}

module.exports = {list, show, create};
