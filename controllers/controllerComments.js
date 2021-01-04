const dComments = require('../data/comments')


//Get Requests
const list = (req,res) => {
    res.json(dComments)
}

const listById = (req,res) => {
    let id = req.params.id - 1;
    res.json(dComments[id])
}

//Post Requests
const post = (req,res) => {
    let newComment = req.body;
    newComment._id = dComments.length + 1;
    dComments.push(newComment)
    res.json(dComments)
}

module.exports = {
    list, listById, post
}