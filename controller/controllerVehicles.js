let vehicles = require('../data/vehicles');
let counter = vehicles.length;

exports.vehiclesGet = function(req, res) {
    res.json(vehicles);
};

exports.vehiclesGetId = function(req, res) {
    res.json(vehicles.filter(vehicle => vehicle._id == req.params.id));
};

exports.vehiclesPost = function(req, res) {
    let postVehicle = req.body;
    let newVehicle = {
        _id: ++counter,
        year: postVehicle.year,
        make: postVehicle.make
    };
    vehicles.push(newVehicle);
    res.send(vehicles);
};

exports.vehiclesPut = function(req, res) {
    let _id = req.params.id;
    let putVehicle = req.body;
    let n = vehicles.findIndex(vehicle => vehicle._id == _id)
    vehicles[n].year = putVehicle.year ? putVehicle.year : vehicles[n].year;
    vehicles[n].make = putVehicle.make ? putVehicle.make : vehicles[n].make;
    res.json(vehicles);
};

exports.vehiclesDelete = function(req, res) {
    let _id = req.params.id;
    let n = vehicles.findIndex(vehicle => vehicle._id == _id);
    vehicles.splice(n, 1)
    res.json(vehicles);
};