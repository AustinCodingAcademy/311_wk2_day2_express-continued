const comments = require('../data/comments');
let counter = comments.length;

//get - return all comments
const list = (req, res) => {
    res.json(comments)
}
//get one comment
const show = (req, res) => {
    let comment = comments.find(v => v._id == req.params.id);
    res.json(comment);
}
//post
const create = (req, res) => {
    let newComment = req.body;
	comments.push(newComment);
    newComment._id = counter++;
	res.json(newComment);
}
//put
const update = (req, res) => {
    let comment = comments.find(v => v._id === req.params.id);
    comment.make = body.make;
    res.json(comment);
}
//delete
const remove = (req, res) => {
    let comment = comments.find(v => v._id === req.params.id);
    comment.isActive = false;
    res.send('comment deleted');
}

module.exports = {list, show, create, update, remove}