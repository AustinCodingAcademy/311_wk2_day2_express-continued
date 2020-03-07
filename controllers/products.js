const products = require('../data/products');

// let productsCounter = products.length;

const list = (req, res)=> {
    res.json(products);
}
const show = (req, res)=>{
    const id = req.params.id;
    const found = products.find(product => product._id === Number(id));
    res.json(found);
}
const create = (req, res)=>{
    const id = products.length + 1;
    let user = {
        ...req.body,
        _id: id,
    }
    products.push(user);
    res.json(products[products.length - 1])
}

module.exports = {
    list, show, create
}