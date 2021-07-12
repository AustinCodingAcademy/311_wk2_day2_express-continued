let products = require('../data/products');
let counter = products.length;

exports.productsGet = function(req, res) {
    res.json(products);
};

exports.productsGetId = function(req, res) {
    res.json(products.filter(product => product._id == req.params.id));
};

exports.productsPost = function(req, res) {
    let postProduct = req.body;
    let newProduct = {
        _id: ++counter,
        name: postProduct.name,
        description: postProduct.description
    };
    products.push(newProduct);
    res.send(products);
};

exports.productsPut = function(req, res) {
    let _id = req.params.id;
    let putProduct = req.body;
    let n = products.findIndex(product => product._id == _id)
    products[n].name = putProduct.name ? putProduct.name : products[n].name;
    products[n].description = putProduct.description ? putProduct.description : products[n].description;
    res.json(products);
};

exports.productsDelete = function(req, res) {
    let _id = req.params.id;
    let n = products.findIndex(product => product._id == _id);
    products.splice(n, 1)
    res.json(products);
};