const products = require('./data/products');

const list = (request, response) =>{
  response.json(products);
}

const show = (request, response) => {
  let id = request.params.id;
  return products.json(products.find(x => x._id === parseInt(id)));
}

const create = (request, response) => {
  request.body._id = products.length;
  request.body._id++;
  products.push(request.body);
  return response.json(products);
}

module.exports = {
  list,
  show,
  create
}