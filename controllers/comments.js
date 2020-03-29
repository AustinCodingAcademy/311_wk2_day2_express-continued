let comments = require("../data/comments");
let lastCommentsId = comments.length;

exports.list = function list(req, res) {
    res.json(comments);
};

exports.show = function show(req, res) {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
};

exports.create = function create(req, res) {
    let newEntry = req.body;
    let newId = lastCommentsId++;
    newEntry._id = newId;
    comments.push(newEntry);
};

module.exports { list, show, create };

