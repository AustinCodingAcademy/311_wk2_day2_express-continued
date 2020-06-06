const express = require('express')
const router = express.Router()
const vehicles = require('../data/vehicles')

router.get('/vehicles', (req, res) => {
    res.json(vehicles)
  })

router.get('/vehicles/:id', (req, res) => {
    let getId = vehicles.find(user => user._id === parseInt(req.params.id))
    res.json(getId)
  })

router.post('/vehicles', (req, res) => {
    const newVehicle = {
        _id: req.body._id,
        imgUrl: req.body.imgUrl,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price: req.body.price,
        km: req.body.km,
        miles: req.body.miles,
        fuel: req.body.fuel,
        city: req.body.city,
        isNew: req.body.isNew
    }
        
    vehicles.push(newVehicle)
    res.json(vehicles)
        
    })

module.exports = router