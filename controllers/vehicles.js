const vehicles = require('../data/vehicles')

function showVehicles(req,res) {
	console.log(req.params)
	let foundVehicle = vehicles.find(vehicle => {
		 console.log(vehicle)
		 return vehicle._id == req.params.id})
	res.json(foundVehicle)
	
}

function postVehicles(req,res){
	req.body._id = vehicles.length+1
vehicles.push(req.body)
res.json(vehicles)
}

function displayVehicles(req,res) {
	res.json(vehicles)
}


module.exports = {showVehicles, postVehicles, displayVehicles}