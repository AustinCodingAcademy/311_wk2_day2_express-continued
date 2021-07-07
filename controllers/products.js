// Products Controllers File

const products = require("../data/products");
// let productsCounter = products.length

const list = (req,res) => {
    res.json(products);
};

function show (req, res) {
    const id = req.params.id;
    const foundProduct = products.find(product => product._id === Number(id))
    res.json(foundProduct);
}

function create (req, res) {
    let newProduct = {
        "_id": products.length + 1,
        ...req.body,
    };
    products.push(newProduct);
    res.json(products[products.length -1]);
    //   res.send('success-jte')

}


module.exports = {
    list,
    show,
    create
}