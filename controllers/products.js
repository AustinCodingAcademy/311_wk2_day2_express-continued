const products = require("../data/products")

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  products.forEach(product => {
    if (product._id == req.params.id) {
      res.json(product)
    }
  })
}

const create = (req, res) => {
  let counter = ++products.length
  products.push({
    _id: ++counter,
    body: req.body.message,
    postId: 1
  })
  res.json(products[products.length - 1])
}

module.exports = { list, show, create }
