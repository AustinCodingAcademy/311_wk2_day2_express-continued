const contacts = require("../data/contact");
let idTotal = 5;
const list = (req, res) => {
	res.json(contacts);
};
const show = (req, res) => {
	let newThing = contacts.some(
		contact => contact._id === parseInt(req.params.id)
	);
	if (newThing) {
		res.json(
			contacts.filter(contact => contact._id === parseInt(req.params.id))
		);
	}
	res.json("did not work");
};
const create = (req, res) => {
	idTotal += contacts._id;
	let newContact = contacts.push(req.body);
	res.status(200).json(newContact);
};

module.exports = { list, show, create };
