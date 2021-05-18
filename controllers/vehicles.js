const vehicles = require("../data/vehicles");

function getAllVehicles(req, res) {
    res.json(vehicles);
}

function getVehicle(req, res) {
    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i]._id == req.params.id) {
            res.json(vehicles[i]);
        }
    }
    
}

function postVehicle(req, res) {
    req.body._Id = vehicles.length;
    req.body.postID = 1;
    vehicles.push(req.body);
    console.log(vehicles);
}

module.exports = {getAllVehicles, getVehicle, postVehicle};