const products = require("../data/products");


exports.list = function (request, response) {
  return response.json(products);
}

exports.show = function (req,res) {
  let id = products.find(i => i._id == req.params.productsId);
  res.json(id)
}

exports.create = function (req,res) {
  let newProduct = req.body;
  products.push(newProduct)
  res.json(newProduct)
}