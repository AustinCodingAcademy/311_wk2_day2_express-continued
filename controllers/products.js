const products = require("../data/products.js")

const list = (req, res) => {
  return res.json(products)
}

const show = (req, res) => {
  let targetId = req.params.id -1
  return res.json(products[targetId])
}

const create = (req, res) => {
  let counter = products.length
  let product = req.body
  product._id = counter + 1
  products.push(product)
  return res.json(products[product._id])
}

module.exports = {list, show, create}