const comments = require("../comments");

// GET - returns all comments
exports.list = function list(request, response) {
	return response.json(comments);
};
// GET - returns one vehicle by ID
exports.show = function show(request, response) {
	let comment = comments.find(i => i._id == request.params.commentId);
	response.json(comment);
};
// POST
exports.create = function create(request, response) {
	let newComment = request.body;
	comments.push(newComment);
	response.json(newComment);
};
// PUT
exports.update = function update(request, response) {
	let comment = comments.find(i => i._id == request.params.commentId);
	response.json(comment);
};

// DELETE
exports.remove = function remove(request, response) {
	let comment = comments.find(i => i._id == request.params.commentId);
	comment.isActive = false;
	response.send("Deleted");
};
