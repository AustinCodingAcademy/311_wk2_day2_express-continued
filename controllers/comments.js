const comments = require("../data/comments")

const list = (req, res) => {
    return res.json(comments)
};

const show = (req, res) => {
    let id = req.params.id - 1;
    return res.json(comments[id])
};

const create = (res, req) => {
    let counter = comments.length;
    let commentNew = req.body;
    commentNew._id = counter + 1;
    comments.push(commentNew);
    let counterComment = commentNew._id -1;
    return res.json(comments[counterComment])
}

module.exports = {
    list,
    show,
    create
};