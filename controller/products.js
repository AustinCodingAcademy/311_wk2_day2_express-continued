const products = require('../data/products')

const list = (req, res) => res.json(products)

const show = (req, res) => {
  res.json (products.find(x => {
    return +req.params.id === x._id
  }))
}

const create = (req, res) => {
  let newID = products.length + 1

  let newProduct = {
    _id: newID,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    reveiws: req.body.reviews
  }

  products.push(newProduct)
  res.json(products)
}

module.exports = {
  list,
  show,
  create
}