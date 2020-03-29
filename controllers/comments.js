const comments = require("../data/Comments");

const list = (req, res) => {
	res.json(comments);
};

const show = (req, res) => {
	let findComments = comments.find((product) => product._id == req.params.id);
	{
		if (findComments) {
			res.send(findComments);
		} else {
			res.send(`message: ${req.params._id} not found`);
		}
	}
};

const create = (req, res) => {
	let counter = comments.length + 1;
	let newComments = {
		_id: counter,
		body: req.body.body
	};
	comments.push(newComments);
	res.json(comments[comments.length - 1]);
};

module.exports = {
	list,
	show,
	create
	// other methods could be listed here with a ',' after each.
};
