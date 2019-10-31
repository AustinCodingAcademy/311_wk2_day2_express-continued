const products = require('../data/products')


function list(req, res) {
  return res.json(products)
}

module.exports = list;