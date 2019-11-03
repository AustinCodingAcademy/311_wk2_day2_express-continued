const express = require('express')
const vehicles = require("../data/vehicles")
const vehichleRoutes = express.Router()

//route.get()
vehichleRoutes.get('/vehicles', (req, res) => {
  res.json(vehicles);
})

//route.get(/:userId`) 
vehichleRoutes.get('/vehicles/:userId', (req, res) => {
  let vehiclesId = parseInt(req.params.userId)
  let vehiclesIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < vehicles.length; i++) {
    if (i + 1 === vehiclesId)  {
      res.json(vehicles[vehiclesIndex])
    }   
  }
})

//route.post()
vehichleRoutes.post('/vehicles', (req, res) => {
  vehicles.push(req.body); 
  let newVehicle = vehicles[vehicles.length -1]
  newVehicle._id = counter
  counter++
  console.log(req.body)
  res.json(newVehicle)
})

module.exports = vehichleRoutes;