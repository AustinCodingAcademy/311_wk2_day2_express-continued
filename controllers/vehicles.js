const vehicles = require('../data/vehicles');

// let vehiclesCounter = vehicles.length;

const list = (req, res)=> {
    res.json(vehicles);
}
const show = (req, res)=>{
    const id = req.params.id;
    const found = vehicles.find(vehicle => vehicle._id === Number(id));
    res.json(found);
}
const create = (req, res)=>{
    const id = vehicles.length + 1;
    let user = {
        ...req.body,
        _id: id,
    }
    vehicles.push(user);
    res.json(vehicles[vehicles.length - 1])
}

module.exports = {
    list, show, create
}