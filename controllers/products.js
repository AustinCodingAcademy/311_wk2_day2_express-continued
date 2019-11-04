const products = require('../data/products');

function list(request,response) {
  return response.json(products);
}

module.exports.list = list;