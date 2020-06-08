const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const vehicles = require('../data/vehicles')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

let counter = 1

router.get('/vehicles',(req,res)=>{
  res.json(vehicles)
})

router.get('/vehicles/:vehiclesID',(req,res)=>{
  let vehicleStringId = req.params.vehiclesID
  let vehicleId = parseInt(vehicleStringId)
  for(let i = 0; i < vehicles.length; i++){
    if(vehicles[i]._id === vehicleId){
      return res.json(vehicles[i])
    }
  }
})

router.post('/vehicles',(req,res)=>{
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
})

module.exports = router