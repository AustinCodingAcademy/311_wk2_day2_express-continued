const comments = require('../data/comments')

function commentShow(req,res) {
	console.log(req.params)
	let foundComment = comments.find(comment => {
		 console.log(comment)
		 return comment._id == req.params.id})
	res.json(foundComment)
	
}

function commentPost(req,res){
	req.body._id = comments.length+1
comments.push(req.body)
res.json(comments)
}

function displayComments(req,res) {
	res.json(comments)
}


module.exports = {commentShow, commentPost, displayComments}