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
  vehicles.push({
    _id: ++counter,
    body: req.body.message,
    postId: 1
  })
  res.json(vehicles[vehicles.length - 1])
}

module.exports = { list, show, create }
