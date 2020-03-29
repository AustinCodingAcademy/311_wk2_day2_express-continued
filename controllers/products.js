const products = require("../data/products");

const list = (req, res) => {
	res.json(products);
};

const show = (req, res) => {
	let findProducts = products.find((product) => product._id == req.params.id);
	{
		if (findProducts) {
			res.send(findProducts);
		} else {
			res.send(`message: ${req.params._id} not found`);
		}
	}
};

const create = (req, res) => {
	let counter = products.length + 1;
	let newProducts = {
		_id: counter,
		name: req.body.name,
		description: req.body.description
	};
	products.push(newProducts);
	res.json(products[products.length - 1]);
};

module.exports = {
	list,
	show,
	create
	// other methods could be listed here with a ',' after each.
};
