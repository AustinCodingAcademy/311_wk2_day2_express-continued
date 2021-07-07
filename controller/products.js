const products = require("../data/products");
const idTotal = 5;

const list = (req, res) => {
	res.json(products);
};
const show = (req, res) => {
	let newThing = products.some(
		product => product._id === parseInt(req.params.id)
	);
	if (newThing) {
		res.json(
			products.filter(product => product._id === parseInt(req.params.id))
		);
	}
	res.json("did not work");
};
const create = (req, res) => {
	idTotal++;
	let newproduct = products.push(req.body);
	res.status(200).json(newproduct);
};

module.exports = { list, show, create };
