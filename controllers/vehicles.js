let vehicles = require("../data/vehicles");
let lastVehiclesId = vehicles.length;


const list = (req, res) => {
    res.json(vehicles);
};

const show = (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle);
};

const create = (req, res) => {
    let newEntry = req.body;
    let newId = lastVehiclesId++;
    newEntry._id = newId;
    vehicles.push(newEntry);
};

module.exports = { list, show, create };