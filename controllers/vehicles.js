const vehicles = require('../data/vehicles')
let counter = 1

const list = (req,res)=>{
  res.json(vehicles)
}

const getOne = (req,res)=>{
  let vehicleIdString = req.params.vehiclesID
  let vehicleId = parseInt(vehicleIdString)
  for(let i = 0; i< vehicles.length;i++){
    if(vehicles[i]._id === vehicleId){
      return res.json(vehicles[i])
    }
  }
}

const post = (req,res)=>{
  let newVehicle = {
    _id : 9,
    year : req.body.year,
    make : req.body.make,
    model : req.body.model
  }
  vehicles.push(newVehicle)
  for(let i =0; i< vehicles.length;i++){
    vehicles[i]._id = counter + vehicles.indexOf(vehicles[i])
  }
  return res.json(vehicles)
}

module.exports = {list : list, getOne , post}
