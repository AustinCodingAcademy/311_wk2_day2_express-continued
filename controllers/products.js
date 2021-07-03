const products = require('../data/products');

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  let product = products.find(product => product._id == req.params.id)
  res.json(product)
}

const create = (req, res) => {
  let newProductId = products.length + 1;

  let newProduct = {
    _id: newProductId,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
  }

  products.push(newProduct)
  res.json(products)
}

module.exports = { list, show, create}

