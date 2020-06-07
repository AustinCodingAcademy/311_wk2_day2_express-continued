const products = require('../data/products')

const list = (req, res) => {
    res.json(products)
  }

const show = (req, res) => {
  let getId = products.find(user => user._id === parseInt(req.params.id))
  res.json(getId)
}


const create = (req, res) => {
  let counter = products.length + 1
  const newProducts = {
      postId : 1,
      _id: req.body._1,
      name: req.body.name,
      description: req.body.name,
      rating: req.body.rating,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.category,
      reviews: req.body.reviews [
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          },
          {
              description: req.body.description,
              rating: req.body.rating
          }
      ]
  }
  
  newProducts.postId = counter
  products.push(newProducts)
  res.json(products)
      
  }

module.exports = {list, show, create}