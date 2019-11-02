const products = require("../data/products");

module.exports.list = function(req, res) {
  return res.json(products);
}

module.exports.show = function(req, res) {
  res.json(products.find(item => item._id == req.params.id))
}

module.exports.create = function(req, res) {
  const nub = {
    _id:products.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  products.push(nub)
  return res.json(nub)
}