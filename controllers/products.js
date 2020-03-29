let products = require("../data/products");
let lastProductsId = products.length;


const list = (req, res) => {
    res.json(products);
};

const show = (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
};

const create = (req, res) => {
    let newEntry = req.body;
    let newId = lastProductsId++;
    newEntry._id = newId;
    products.push(newEntry);
};

module.exports = { list, show, create };