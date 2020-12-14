
const vehicles = require("../data/vehicles")

// function for list
const list = (req, res) => {
  return res.json(vehicles)
}

// function for show
const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(vehicles[id])
};

// function for create
const create = (res, req) => {
  let counter =  vehicles.length;
  let vehiclesNew = req.body;
  vehiclesNew._id = counter + 1;
  vehicles.push(vehiclesNew);
  let counterVehicles = vehiclesNew._id -1;
  return res.json(vehicles[counterVehicles])
}

//export modules
module.exports = {
  list,
  show,
  create
};
