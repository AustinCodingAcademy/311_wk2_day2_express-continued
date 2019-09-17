const contacts = require("../contacts");

// GET - returns all comments
exports.list = function list(request, response) {
	return response.json(comments);
};
// GET - returns one vehicle by ID
exports.show = function show(request, response) {
	let contact = contacts.find(i => i._id == request.params.contactId);
	response.json(contact);
};
// POST
exports.create = function create(request, response) {
	let newContact = request.body;
	contacts.push(newContact);
	response.json(newContact);
};
// PUT
exports.update = function update(request, response) {
	let contact = contacts.find(i => i._id == request.params.contactId);
	response.json(contact);
};

// DELETE
exports.remove = function remove(request, response) {
	let contact = contacts.find(i => i._id == request.params.contactId);
	contact.isActive = false;
	response.send("Deleted");
};
