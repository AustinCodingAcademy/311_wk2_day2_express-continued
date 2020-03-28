const vehicles = require('../data/vehicles');

const list = (req, res) => {
    res.json(vehicles);
}

const show = (req, res) => {
    let id = req.params.id;
    res.json(vehicles.find(i => i._id === parseInt(id)));
}

const create = (req, res) => {
    req.body._id = vehicles.length;
    req.body._id++;
    vehicles.push(req.body);
    res.json(vehicles);
}

module.exports = { list, show, create };