const vehicles = require('../data/vehicles');

let vehicleCounter = vehicles.length;
console.log(vehicleCounter);

const list = (req,res) => {
    res.json(vehicles);
};

const show = (req,res) => {
    const id = req.params.id;
 
    const vehicle = vehicles.find(vehicle => vehicle._id === Number(id));
 
     res.json(vehicle);
 };
 
const create = (req,res) => {
    let newVehicle = {
        _id: vehicleCounter + 1,
        body: req.body.body,
        postId: 1
    };
    //console.log(newVehicle);
   contacts.push(newVehicle);
};
 
module.exports = {
    list,
    show,
    create
};