const products = require("../data/products")

// this function looks for products
const show = (req, res) => {
    // this function will tell whether products exist
    const foundProducts = products.some(
        products => products._id === parseInt(req.params.id)
    );
    // and if products are found... 
    if (foundProducts === true) {
        res.json(
            products.filter(comment => comment.id === parseInt(req.params.id))
        );
    // if it doesn't find that comment...
    } else {
        res.status(400).json({msg: `Comment ${req.params.id} does not exist.`})
    }
};

const list = (req, res) => {
    res.json(products);
};

const create = (req, res) => {
    res.send(req.body);
};

module.exports = { list, show, create }