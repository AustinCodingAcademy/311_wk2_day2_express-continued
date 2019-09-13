const vehicles = require("../data/vehicles");
const list = (req, res) => {
  res.json(vehicles);
};
const show = (req, res) => {
  const foundVehicle = vehicles.some(
    vehicle => vehicle._id === parseInt(req.params.id)
  );

  if (foundVehicle) {
    res.json(
      vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `no vehicle with that id` });
  }
};

const create = (req, res) => {
  let vehicle3 = req.body;
  res.send(vehicle3);
  console.log(vehicle3);
};
module.exports = { list, show, create };
