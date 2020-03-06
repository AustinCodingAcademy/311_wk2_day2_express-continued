// Products Controllers File

const products = require("../data/products");

// used for the create part of the assignment
let productsCounter = products.length

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
        _id: Number(productsCounter + 1),
        body: req.body,
        postId: 1 
    };

    // console.log(newProduct);

    products.push(req.body);

}


module.exports = {
    list,
    show,
    create
}