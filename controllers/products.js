let products = require("../data/products");
let lastProductsId = products.length;


exports.list('/products', (req, res) => {
    res.json(products);
});

exports.show('/products/:id', (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
});

exports.create('/products', (req, res) => {
    let newEntry = req.body;
    let newId = lastProductsId++;
    newEntry._id = newId;
    products.push(newEntry);
});

module.exports { list, show, create };