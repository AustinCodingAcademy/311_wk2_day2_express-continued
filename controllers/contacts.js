const contacts = require("../data/contacts");

const list = (req, res) => {
	res.json(contacts);
};

const show = (req, res) => {
	let findContact = contacts.find((contact) => contact._id == req.params.id);
	if (findContact) {
		res.send(findContact);
	} else {
		res.send(`message: ${req.params.id} Not Found`);
	}
};

const create = (req, res) => {
	//increments the user id as users are added
	let counter = contacts.length + 1;
	let newContact = {
		_id: counter,
		name: req.body.name,
		occupation: req.body.occupation,
		avatar: req.body.avatar
	};

	contacts.push(newContact);
	res.json(contacts[contacts.length - 1]);
};

module.exports = {
	list,
	show,
	create
	// other methods could be listed here with a ',' after each.
};
