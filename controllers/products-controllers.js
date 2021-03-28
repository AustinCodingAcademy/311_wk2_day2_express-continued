const products = require('./../data/products')
let counter = products.length+1

const getProduct = (req, res) => {
    res.json(products)
}

const createProduct = (req, res) => {
    products.push({_id: counter++, ...req.body});
    res.json(products[products.length-1])
}

const updateProduct = (req, res) => {
    let foundProduct = products.find( product => product._id === parseInt(req.params.productId))
    foundProduct.name = req.body.name ? req.body.name : foundProduct.name
    foundProduct.description = req.body.description ? req.body.description : foundProduct.description
    foundProduct.rating = req.body.rating ? req.body.rating : foundProduct.rating
    foundProduct.imgUrl = req.body.imgUrl ? req.body.imgUrl : foundProduct.imgUrl
    foundProduct.price = req.body.price ? req.body.price : foundProduct.price
    foundProduct.category = req.body.category ? req.body.category : foundProduct.category
    foundProduct.reviews = req.body.reviews ? req.body.reviews : foundProduct.reviews
    res.json(foundProduct)
}

const deleteProduct = (req, res) => {
    let foundProduct = products.find( product => product._id === parseInt (req.params.productId))
    if (foundProduct) {
        foundProduct.isActive = false
        res.send("Product Deleted")
    } else {
        res.status(400).json({message: `No product with the id of ${req.params.productId}`})
    }
}

const showProduct = (req,res) => {
    products.find( product => product._id === parseInt (req.params.productId))
    res.json(foundProduct)
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    showProduct,
}