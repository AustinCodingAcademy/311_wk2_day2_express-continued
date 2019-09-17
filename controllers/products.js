const products = require("../products");

// GET - returns all comments
exports.list = function list(request, response) {
	return response.json(products);
};
// GET - returns one vehicle by ID
exports.show = function show(request, response) {
	let product = products.find(i => i._id == request.params.productId);
	response.json(product);
};
// POST
exports.create = function create(request, response) {
	let newContact = request.body;
	contacts.push(newContact);
	response.json(newContact);
};
// PUT
exports.update = function update(request, response) {
	let product = products.find(i => i._id == request.params.productId);
	response.json(product);
};

// DELETE
exports.remove = function remove(request, response) {
	let product = products.find(i => i._id == request.params.productId);
	product.isActive = false;
	response.send("Deleted");
};
