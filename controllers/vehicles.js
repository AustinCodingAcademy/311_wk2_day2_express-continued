const vehicles = require("../data/vehicles")

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  vehicles.forEach(vehicle => {
    if (vehicle._id == req.params.id) {
      res.json(vehicle)
    }
  })
}

const create = (req, res) => {
  let counter = ++vehicles.length
  let postId = counter
  req.body.push(postId)
  vehicles.push(req.body)
  res.json(vehicles[vehicles.length - 1])
}

module.exports = { list, show, create }
