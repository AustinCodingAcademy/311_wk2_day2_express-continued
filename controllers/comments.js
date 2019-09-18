const comments = require("../data/comments")

// this function looks for comments
const show = (req, res) => {
    // this function will tell whether comments exist
    const foundComments = comments.some(
        comments => comments._id === req.params.id
    );
    // and if comments are found... 
    if (foundComments) {
        res.json(
            comments.filter(comment => comment.id === req.params.id)
        );
    // if it doesn't find that comment...
    } else {
        res.status(400).json({msg: `Comment ${req.params.id} does not exist.`})
    }
};

const list = (req, res) => {
    res.json(comments);
};

const create = (req, res) => {
    res.send(req.body);
};

module.exports = { list, show, create }