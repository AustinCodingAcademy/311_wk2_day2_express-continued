const vehicles = require('../data/vehicles');
let counter = vehicles.length;

//get - return all vehicles
const list = (req, res) => {
    res.json(vehicles)
}
//get one vehicle
const show = (req, res) => {
    let vehicle = vehicles.find(v => v._id == req.params.id);
    res.json(vehicle);
}
//post
const create = (req, res) => {
    let newVehicle = req.body;
	vehicles.push(newVehicle);
    newVehicle._id = (counter ++);
	res.json(newVehicle);
}
//put
const update = (req, res) => {
    let vehicle = vehicles.find(v => v._id === req.params.id);
    vehicle.make = body.make;
    res.json(vehicle);
}
//delete
const remove = (req, res) => {
    let vehicle = vehicles.find(v => v._id === req.params.id);
    vehicle.isActive = false;
    res.send('vehicle deleted');
}

module.exports = {list, show, create, update, remove}