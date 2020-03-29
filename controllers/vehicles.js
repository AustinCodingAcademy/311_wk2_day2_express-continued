const vehicles = require("../data/vehicles");

const list = (req, res) => {
	res.json(vehicles);
};

const show = (req, res) => {
	let findVehicle = vehicles.find((contact) => contact._id == req.params.id);
	if (findVehicle) {
		res.send(findVehicle);
	} else {
		res.send(`message: ${req.params.id} Not Found`);
	}
};

const create = (req, res) => {
	//increments the user id as users are added
	let counter = vehicles.length + 1;
	let newVehicle = {
		_id: counter,
		year: req.body.year,
		make: req.body.make,
		model: req.body.model
	};

	vehicles.push(newVehicle);
	res.json(vehicles[vehicles.length - 1]);
};

module.exports = {
	list,
	show,
	create
	// other methods could be listed here with a ',' after each.
};
