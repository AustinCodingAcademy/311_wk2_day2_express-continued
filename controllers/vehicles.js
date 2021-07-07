const vehicles = require('../data/vehicles');

//get
const vehiclesList = (req, res) => {
  res.json(vehicles)
}

//get 
const vehiclesListById = (req, res) => {
  const found = vehicles.some(vehicle => vehicle._id == req.params.id);
  if(found){
    res.send(vehicles.filter(vehicle => vehicle._id == req.params.id))
  }else{
    res.status(404).json({msg: 'Vehicle not found'});
  }
}

//post
const createVehicle = (req, res) => {
  counter = vehicles.length
  const newVehicle = {
    "_id": counter+1,
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
  }
  
  if(!newVehicle.year || !newVehicle.miles){
    return res.status(400).json({ msg: 'Please include a year and miles'});
  }

  vehicles.push(newVehicle);
  res.json(vehicles)
}


module.exports = { vehiclesList, vehiclesListById, createVehicle };