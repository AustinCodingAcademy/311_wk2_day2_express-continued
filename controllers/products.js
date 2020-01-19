const products = require("../data/products")

// get - returns all
exports.list = function list(req, res) {
  return res.json(products);
}

// get by id
exports.show = function show(req, res) {
  res.json(products.find(products => products._id === parseInt(req.params._id))); 
}

// post 
exports.create = function create(req, res) {
    const newProduct = {
      _id: ++counter,
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.catagory,
      reviews: req.body.reviews[{
        description: req.body.description,
        rating: req.body.rating
      }]
    }; 
    products.push(newProduct);
    res.json(products);
}

module.exports = { list, show, create }