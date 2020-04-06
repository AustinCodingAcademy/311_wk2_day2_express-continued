const vehicles = require('../data/vehicles');
vehiclesCounter = vehicles.length

const list  = (req, res) => {
    return res.json(vehicles);
   }

   const show = (req, res) => {
    const id = req.params.id;
    const vehicle = vehicles.find(vehicle => vehicle._id === Number(id))
    res.json(vehicle)
   }

   const create = (req, res) =>{
    let newVehicle = {
        _id: vehiclesCounter + 1,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
        
    }
    vehicles.push(newVehicle)
}

module.exports = {
    list,
    show,
    create
}