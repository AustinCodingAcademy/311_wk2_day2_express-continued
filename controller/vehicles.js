const vehicles = require('../data/vehicles')

const list = (req, res) => res.json(vehicles)

const show = (req, res) => {
  res.json (vehicles.find(x => {
    return +req.params.id === x._id
  }))
}

const create = (req, res) => {
  let newID = vehicles.length + 1

  let newVehicle = {
    _id: newID,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: false
  }

  vehicles.push(newVehicle)
  res.json(vehicles)
}

module.exports = {
  list,
  show,
  create
}