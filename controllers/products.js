let products = require("../data/products");
// create a unique ID for the POST methods
const uuidv1 = require("uuid/v1")

// show all the products
const list = (req, res) => {
    res.json(products);
};

// show one product
const show = (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
};

// add a new product
const create = (req, res) => {
    let newProduct = req.body;
    
    // give it a unique ID
    newProduct._id = uuidv1();

    // add it to the products!
    products.push(newProduct);
    // reply with a list of all the products
    res.json(products);
};

module.exports = { list, show, create };
