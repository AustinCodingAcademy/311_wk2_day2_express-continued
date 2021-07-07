const comments = require("../data/comments");
let idTotal = 5;
const list = (req, res) => {
	res.json(comments);
};
const show = (req, res) => {
	let newThing = comments.some(
		comment => comment._id === parseInt(req.params.id)
	);
	if (newThing) {
		res.json(
			comments.filter(comment => comment._id === parseInt(req.params.id))
		);
	}
	res.json("did not work");
};
const create = (req, res) => {
	idTotal++;
	let newComment = comments.push(req.body);
	res.status(200).json(newComment);
};

module.exports = { list, show, create };
