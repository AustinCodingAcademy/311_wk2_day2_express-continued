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
  let postId = counter
  req.body.push(postId)
  products.push(req.body)
  res.json(products[products.length - 1])
}

module.exports = { list, show, create }
