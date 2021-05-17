const products = require("../data/products")

function list(req, res) {
    res.json(products)
}

function show(req, res) {
    products.forEach(product => {
        if(product._id == req.params.id) {
            return res.json(product)
        }
    })
    return res.send("no product found")
}

function create() {
    let counter = products.length
    products.push({
        "name": req.body.name,
        "description": req.body.description,
        "rating": req.body.rating,
        "imgUrl": req.body.imgUrl,
        "price": req.body.price,
        "category": req.body.category
    })
    res.json(products[products.length -1])
}

module.exports = {list, show, create
}