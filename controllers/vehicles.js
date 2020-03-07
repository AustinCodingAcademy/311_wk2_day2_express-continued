// Vehicles Controllers File

const vehicles = require("../data/vehicles");
// let vehicleCounter = vehicles.length 

const listVehicles = (req,res) => {
    res.json(vehicles);

}

function displaySingleVehicle (req, res){
    const id = req.params.id;
    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id))
    res.json(foundVehicle);
}


function create(req, res) {
    let newVehicle = {
        "_id": vehicles.length+1,
        ...req.body
    }
    vehicles.push(newVehicle);
    res.json(vehicles[vehicles.length -1]);
    //   res.send('success-jte')
}


module.exports = {
    listVehicles,
    displaySingleVehicle,
    create
}