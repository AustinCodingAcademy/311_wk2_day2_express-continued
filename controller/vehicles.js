const vehicles = require("../data/vehicles");

module.exports.list = function(req, res) {
  return res.json(vehicles);
}

module.exports.show = function(req, res) {
  res.json(vehicles.find(item => item._id == req.params.id))
}

module.exports.create = function(req, res) {
  const nub = {
    _id:vehicles.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  vehicles.push(nub)
  return res.json(nub)
}