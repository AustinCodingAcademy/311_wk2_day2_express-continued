const vehicles = require("../data/vehicles")

let counter = vehicles.length +1

const list =  (req, res) => {
    res.json(vehicles);
  }

const show = (req, res) => {
    let vehiclesId = parseInt(req.params.userId)
    let vehiclesIndex = parseInt(req.params.userId) - 1;
    
    for (let i = 0; i < vehicles.length; i++) {
      if (i + 1 === vehiclesId)  {
        res.json(vehicles[vehiclesIndex])
      }   
    }
  }

const create = (req, res) => {
  const newVehicle = {
    _id: counter,
    year: req.body.year,
    model: req.body.model,
    make: req.body.make
    }
    vehicles.push(newVehicle); 
    counter = counter++
    console.log(req.body)
    res.json(newVehicle)
  }

module.exports = { list, show, create }