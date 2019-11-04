const products = require("../data/products")

//list
exports.list = function list(res, req) {
  res.json(products);
}
// show
exports.show = function show(res, req) {
  let product = products.find(i => i._id == req.params.id);
  res.json(product);
}
// create
exports.create = function create(res, req) {
  let body = req.body;
  let newProduct = {
    _id: products.length + 1,
    name: body.name,
    description: body.description,
    rating: body.rating,
    imgUrl: body.imgUrl,
    price: body.price,
    category: body.food,
    review: []
  }
  
  products.push(newProduct);
}
