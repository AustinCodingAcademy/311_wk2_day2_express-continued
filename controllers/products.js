
const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
}

const show = (req, res) => {
  let productId = parseInt(req.params.id);
  let thisProduct = products.find(product => product._id === productId)
  res.json(thisProduct);
}

const create = (req, res) => {
  let id = products.length + 1;
  let newProduct = {
    _id: id,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  }
  
  products.push(newProduct);
  res.json(products);
}

module.exports = {
  list, show, create
}