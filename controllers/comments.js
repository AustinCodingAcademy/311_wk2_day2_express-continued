const comments = require('../data/comments');

const list = (req, res) => {
    res.json(comments);
}

const show = (req, res) => {
    let id = req.params.id;
    res.json(comments.find(i => i._id === parseInt(id)));
}

const create = (req, res) => {
    req.body._id = comments.length;
    req.body._id++;
    comments.push(req.body);
    res.json(comments);
}

module.exports = { list, show, create };