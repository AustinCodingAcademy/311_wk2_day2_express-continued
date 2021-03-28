
let comments = require('../data/comments')
let counter = comments.length + 1

const getAllComments = (req, res) => {
    res.json(comments)

}

const createComment = (req, res) => {
  comments.push({_id: counter++, ...req.body});
  res.json(comments[comments.length - 1])
}

const updateComment = (req, res) => {
    let foundComment = comments.find( comments => comments._id === parseInt(req.params.id))
    foundComment.body = req.body.body ? req.body.body : foundComment.body
    foundComment.postId = req.body.postId ? req.body.postId : foundComment.postId
    res.json(foundComment)
   
    
    
}


const getOneComment = (req, res) => {
    if (req.params.id) {
        res.json(comments.filter( comments => comments._id === parseInt(req.params.id)))
    } else {
        res.status(400).json({message: `Could not find comment`})
    }
}


const deleteComment = (req, res) => {
    let foundComment = (comments.filter( comments => comments._id === parseInt(req.params.id)))
    let comment = foundComment[0]
    if (comment) {
        comment.isActive = false
        res.send("Comment Deleted")
    } else {
        res.status(400).json({message: `No comment with id of ${req.params.userId}`})
    }
}

module.exports = {
    createComment,
    getAllComments,
    getOneComment,
    updateComment,
    deleteComment
}
