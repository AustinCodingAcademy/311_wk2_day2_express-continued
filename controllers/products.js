const products = require('../data/products');

const list = (req, res) => {
    res.json(products);
}

const show = (req, res) => {
    let id = req.params.id;
    res.json(products.find(i => i._id === parseInt(id)));
}

const create = (req, res) => {
    req.body._id = products.length;
    req.body._id++;
    products.push(req.body);
    res.json(products);
}

module.exports = { list, show, create };