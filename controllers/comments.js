const comments = require("../data/comments")
let commentCounter = comments.length;

const list = (req, res) => {
    res.json(comments)
}

const show = (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment._id === Number(id))
    res.json(comment)
}

const create = (req, res) => {
    comments.push({
        _id: commentCounter + 1,
        body: req.body.body,
        postId: 1
    })
    res.json(comments)
     }

module.exports = {
    list, 
    show, 
    create
}