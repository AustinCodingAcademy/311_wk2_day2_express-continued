const products = require("../data/products")

let counter = products.length +1

const list = (req, res) => {
    res.json(products);
  }

const show = (req, res) => {
    let productsId = parseInt(req.params.userId)
    let productsIndex = parseInt(req.params.userId) - 1;
    
    for (let i = 0; i < products.length; i++) {
      if (i + 1 === productsId)  {
        res.json(products[productsIndex])
      }   
    }
  }

const create = (req, res) => {
  const newProduct = {
    _id: counter,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating
    }
    products.push(newProduct); 
    counter = counter++
    console.log(req.body)
    res.json(newProduct)
  }

module.exports = { list, show, create }