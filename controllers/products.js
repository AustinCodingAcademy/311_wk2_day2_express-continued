const products = require('../data/products');
let counter = products.length;

//get - return all products
const list = (req, res) => {
    res.json(products)
}
//get one product
const show = (req, res) => {
    let product = products.find(v => v._id == req.params.id);
    res.json(product);
}
//post
const create = (req, res) => {
    let newProduct = req.body;
	products.push(newProduct);
    newProduct._id = counter++;
	res.json(newProduct);
}
//put
const update = (req, res) => {
    let product = products.find(v => v._id === req.params.id);
    product.make = body.make;
    res.json(product);
}
//delete
const remove = (req, res) => {
    let product = products.find(v => v._id === req.params.id);
    product.isActive = false;
    res.send('product deleted');
}

module.exports = {list, show, create, update, remove}