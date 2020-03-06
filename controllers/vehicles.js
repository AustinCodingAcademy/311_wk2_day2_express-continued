// Vehicles Controllers File

const vehicles = require("../data/vehicles");

// used for the create part of the assignment
// let contactsCounter = contacts.length 

const listVehicles = (req,res) => {
    res.json(vehicles);

}

function displaySingleVehicle (req, res){
    const id = req.params.id;
    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id))
    res.json(foundVehicle);
}

// used for the create part of the assignment
// function create(res) {
//     newUser {
//         id: contactsCounter + 1;
//     }
// }


module.exports = {
    listVehicles,
    displaySingleVehicle
}