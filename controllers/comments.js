// Comments Controllers File

const comments = require("../data/comments");



function list (req,res) {
    res.json(comments);
};

function show (req, res) {
    const id = req.params.id;
    const foundComment = comments.find(comment => comment._id === Number(id))
    res.json(foundComment);
}











module.exports = {
    list,
    show
}