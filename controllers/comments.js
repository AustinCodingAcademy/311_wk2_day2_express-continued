const comments = require('../data/comments')

let commentCounter = comments.length;
console.log(commentCounter);

const list = (req,res) => {
    res.json(comments);
};

const show = (req,res) => {
    const id = req.params.id;
 
    const comment = comments.find(comment => comment._id === Number(id));
 
     res.json(comment);
 };

const create = (req,res) => {
    let newComment = {
        _id: commentCounter + 1,
        body: req.body.body,
        postId: 1
    };
    //console.log(newComment);
   comments.push(newComment);
};

module.exports = {
list,
show,
create
};

