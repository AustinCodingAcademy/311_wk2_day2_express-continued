const comments = require('../data/comments');

// let commentsCounter = comments.length;

const list = (req, res)=> {
    res.json(comments);
}
const show = (req, res)=>{
    const id = req.params.id;
    console.log(req.params.id);
    const found = comments.find(comment => comment._id === Number(id));
    res.json(found);
}
const create = (req, res)=>{
    const id = comments.length + 1;
    let newComment = {
        ...req.body,
        _id: id,
    }
    comments.push(newComment);
    res.json(users[users.length - 1])
}

module.exports = {
    list, show, create
}