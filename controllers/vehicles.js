let vehicles = require("../data/vehicles");
let lastVehiclesId = vehicles.length;


exports.list('/vehicles', (req, res) => {
    res.json(vehicles);
});

exports.show('/vehicles/:id', (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle);
});

exports.create('/vehicles', (req, res) => {
    let newEntry = req.body;
    let newId = lastVehiclesId++;
    newEntry._id = newId;
    vehicles.push(newEntry);
});

module.exports { list, show, create };