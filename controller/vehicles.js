const vehicles = require("../data/vehicles");

const list = (req, res) => {
	res.json(vehicles);
};
const show = (req, res) => {
	let newThing = vehicles.some(
		vehicle => vehicle._id === parseInt(req.params.id)
	);
	if (newThing) {
		res.json(
			vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id))
		);
	}
	res.json("did not work");
};
const create = (req, res) => {
	idTotal++;
	let newVehicle = vehicles.push(req.body);
	res.status(200).json(newVehicle);
};

module.exports = { list, show, create };
