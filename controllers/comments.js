let comments = require("../data/comments");
let lastCommentsId = comments.length;

const list = (req, res) => {
    res.json(comments);
};

const show = (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
};

const create = (req, res) => {
    let newEntry = req.body;
    lastCommentsId++;
    newEntry._id = lastCommentsId;
    comments.push(newEntry);
};

module.exports = { list, show, create };

