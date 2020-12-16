const products = require("../data/products")

const list = (req, res) => {
    return res.json(products)
};

const show = (req, res) => {
    let id = req.params.id - 1;
    return res.json(products[id])
};

const create = (res, req) => {
    let counter = products.length;
    let productNew = req.body;
    productNew._id = counter + 1;
    products.push(productNew);
    let counterproduct = producttNew._id -1;
    return res.json(products[counterproduct])
}

module.exports = {
    list,
    show,
    create
};