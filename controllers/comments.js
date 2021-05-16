const comments = require("../data/comments")

function list(req, res) {
    res.json(comments)
}

function show(req, res) {
    comments.forEach(comment => {
        if(comment._id == req.params.id) {
            return res.json(comment)
        }
    })
    return res.send("no comment found")
}

function create(req, res) {
    comments.push(req.body)
    res.json(comments[comments.length -1])
}

module.exports = {list, show, create}