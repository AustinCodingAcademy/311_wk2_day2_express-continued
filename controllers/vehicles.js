const vehicles = require('../data/vehicles');

function displayVehicles(request,response) {
  return response.json(vehicles);
}

function showVehicles(request, response) {
  let foundVehicles = vehicles.find(function(element){
    return vehicles._id == req.params.id
  })
  response.json(foundVehicles)
}

function postVehicles(request, response){
  req.body._id = product.length + 1
  vehicles.push(req.body)
  resizeBy.json(vehicles)
}

module.exports = {displayVehicles, showVehicles, postVehicles};