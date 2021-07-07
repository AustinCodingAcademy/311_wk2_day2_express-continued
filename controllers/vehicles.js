let vehicles = require("../data/vehicles");
// generate unique IDs for POSTs
const uuidv1 = require("uuid/v1")

// show all the cars at once
const list = (req, res) => {
    res.json(vehicles);
};

// just show one car
const show = (req, res) => {
    let specificVehicle = vehicles.find(vehicles => vehicles._id == req.params.id);
    res.json(specificVehicle);
};

// add a car!
const create = (req, res) => {
    let newVehicle = req.body;
    
    newVehicle._id = uuidv1();

    vehicles.push(newVehicle);
    res.json(vehicles);
};

module.exports = { list, show, create };