const products = require('../data/products');

function displayProducts(request,response) {
  return response.json(products);
}

function showProducts(request, response) {
  let foundProduct = products.find(function(element){
    return products._id == req.params.id
  })
  response.json(foundProduct)
}

function postProducts(request, response){
  req.body._id = product.length + 1
  products.push(req.body)
  resizeBy.json(products)
}

module.exports = {displayProducts, showProducts, postProducts};