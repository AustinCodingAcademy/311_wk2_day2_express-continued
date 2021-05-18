const products = require('../data/products');

function getProduct(req, res) {
    console.log('Im being run! getproduct')
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id == req.params.id) {
            res.json(products[i])
        }
    }
}

function getAllProducts(req, res) {
    console.log('Im being run! getallproducts')
    res.json(products);
}

function postProduct(req, res) {
    req.body._Id = products.length;
    req.body.postID = 1;
    products.push(req.body);
    console.log(products);
}

module.exports = {getProduct, getAllProducts, postProduct};