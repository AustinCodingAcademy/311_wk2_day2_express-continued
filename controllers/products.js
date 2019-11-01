const products = require('data/products')


 const list = (req, res) => {
  return res.json(products)
}

module.exports = list;