const vehicles = require("../vehicles");

// GET - returns all comments
exports.list = function list(request, response) {
	return response.json(vehicles);
};
// GET - returns one vehicle by ID
exports.show = function show(request, response) {
	let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
	response.json(vehicle);
};
// POST
exports.create = function create(request, response) {
	let newContact = request.body;
	contacts.push(newContact);
	response.json(newContact);
};
// PUT
exports.update = function update(request, response) {
	let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
	response.json(vehicle);
};

// DELETE
exports.remove = function remove(request, response) {
	let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
	vehicle.isActive = false;
	response.send("Deleted");
};
