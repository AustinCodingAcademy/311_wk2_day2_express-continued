const vehicles = require('../data/vehicles')
let counter = vehicles.length;


 const list = (req, res) => {
  return res.json(vehicles)
}

const show = (req,res)=>{
  let getVehicle = users.find(getVehicle => getVehicle._id === parseInt(req.params.id))
  res.json(getVehicle);
}

const create = (req,res)=>{
  let createVehicle = req.body;
  vehicles.push(createVehicle);
  createVehicle._id = counter++;
  res.json(createVehicle)
}

module.exports = {list,show,create}