const vehicles = require('../data/vehicles');

const list = (request, response) =>{
  response.json(vehicles);
}

const show = (request, response) => {
  let id = request.params.id;
  return response.json(vehicles.find(x => x._id === parseInt(id)));
}

const create = (request, response) => {
  request.body._id = vehicles.length;
  request.body._id++;
  vehicles.push(request.body);
  return response.json(vehicles);
}

module.exports = {
  list,
  show,
  create
}