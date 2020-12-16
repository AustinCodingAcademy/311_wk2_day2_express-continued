const vehicles = require("../data/vehicles")

const list = (req, res) => {
    return res.json(vehicles)
};

const show = (req, res) => {
    let id = req.params.id - 1;
    return res.json(vehicles[id])
};

const create = (res, req) => {
    let counter = vehicles.length;
    let vehicleNew = req.body;
    vehicleNew._id = counter + 1;
    vehicles.push(vehicleNew);
    let countervehicle = vehicletNew._id -1;
    return res.json(vehicles[countervehicle])
}

module.exports = {
    list,
    show,
    create
};