const products = require('../data/products');

// Gets all products
const list = (req, res) => {
    res.json(products);
}


// Gets product by ID
const show = (req, res) => {
let productsId = products.find(x => x._id == req.params.id);
if(productsId) {
    res.json(productsId);
} else {
    res.status(400).send(`Product number ${req.params.id} does not exist.`);
    }
}

// Creates a product
const create = (req, res) => {
    res.json(products.push({
        "name": req.body.name,
        "description": req.body.description,
        "rating": req.body.rating,
        "imgUrl": req.body.imgUrl,
        "price": req.body.price,
        "category": req.body.category,
        "reviews": [{
        "description": req.body.description,
        "rating": req.body.rating
        }]
    }))
}

module.exports = {list, show, create}
