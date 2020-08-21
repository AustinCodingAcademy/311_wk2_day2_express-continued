const comments = require('./../data/comments')
let counter = comments.length+1

// List //
const listComment = (req, res) => {
    res.json(comments)
}

// Create // 
const createComment = (req, res) => {
    comments.push ({_id: counter++, ...req.body});
    res.json(comments[comments.length-1])
}

// Update //
const updateComment = (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt(req.params.commentId))
    foundComment.body = req.bode.body ? req.body.body : foundComment.body
    foundComment.postId = req.body.postId ? req.body.postId : foundComment.postIdres
    res.json(foundComment)
}

// Delete // 
const deleteComment = (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt (req.params.commentId))
    if (foundComment) {
        foundComment.isActive = false
        res.send("No Comment!")
    } else {
        res.status(400).json({message: `No comment with the Id of ${req.params.commentId}`})
    }
    }
// Show //
const showComment = (req, res) => {
    let foundComment = comments.find( comment => comment._id === parseInt(req.params.commentId))
    res.json(foundComment)
}

module.exports = {
    listComment,
    createComment,
    updateComment,
    deleteComment,
    showComment
}