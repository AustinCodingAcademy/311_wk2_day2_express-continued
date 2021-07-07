// Comments Controllers File

const comments = require("../data/comments");
// const commentsCounter = comments.length

function list (req,res) {
    res.json(comments);
};

function show (req, res) {
    const id = req.params.id;
    const foundComment = comments.find(comment => comment._id === Number(id))
    res.json(foundComment);
}

function create (req, res) {
    let newComment = {
        "_id": comments.length+1,
        ...req.body
    }
    comments.push(newComment);
    res.json(comments[comments.length -1]);
    //   res.send('success-jte')
}

module.exports = {
    list,
    show,
    create
}