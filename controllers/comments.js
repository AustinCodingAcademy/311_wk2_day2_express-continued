const comments = require('../data/comments');
commentCounter = comments.length

const list = (req, res) => {
    return res.json(comments);
   }

const show = (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment._id === Number(id))
    res.json(comment)
   }

const create = (req, res) =>{
    let newComment = {
        //one body for the obj inside data and one on the webpage
        _id: commentCounter + 1,
        body: req.body.body,
    }
    comments.push(newComment)
}

module.exports = {
    list,
    show,
    create
}