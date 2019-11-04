const vehicles = require('../data/vehicles');
let vehCounter = vehicles.length +1;

// Show all vehicles
const list = (req, res) => {
    res.json(vehicles);
}

// Gets a vehicle by id
const show = (req, res) => {
    let vehicleId = vehicles.find(x._id == req.params.id);
    if(vehicleId) {
        res.json(vehicleId);
    } else {
        res.status(400).send(`Vehicle number with the ID ${req.params.id} does not exist.`);
    }
}

// Creates a vehicle
const create = (req, res) => {
    res.json(vehicles.push({
        "_id": vehCounter++,
        "imgUrl": req.body.imgUrl,
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model,
        "price": req.body.price,
        "km": req.body.km,
        "miles": req.body.miles,
        "fuel": req.body.fuel,
        "city": req.body.city,
        "isNew": req.body.isNew
    }))
}

module.exports = {list, show, create};