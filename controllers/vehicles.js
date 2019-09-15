const vehicles = require("../data/vehicles")

// this function looks for vehicles
const show = (req, res) => {
    // this function will tell whether vehicles exist
    const foundVehicles = vehicles.some(
        vehicles => vehicles._id === parseInt(req.params.id)
    );
    // and if vehicles are found... 
    if (foundVehicles === true) {
        res.json(
            vehicles.filter(comment => comment.id === parseInt(req.params.id))
        );
    // if it doesn't find that comment...
    } else {
        res.status(400).json({msg: `Comment ${req.params.id} does not exist.`})
    }
};

const list = (req, res) => {
    res.json(vehicles);
};

const create = (req, res) => {
    res.send(req.body);
};

module.exports = { list, show, create }