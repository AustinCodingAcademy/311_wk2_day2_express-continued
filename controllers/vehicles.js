const vehicles = require("../data/vehicles.js")

const list = (req, res) => {
  return res.json(vehicles)
}

const show = (req, res) => {
  let targetId = req.params.id -1
  return res.json(vehicles[targetId])
}

const create = (req, res) => {
  let counter = vehicles.length
  let vehicle = req.body
  vehicle._id = counter + 1
  vehicles.push(vehicle)
  return res.json(vehicles[vehicle._id])
}

module.exports = {list, show, create}