const dVehicles = require('../data/vehicles')


//Get Requests
const list = (req,res) => {
    res.json(dVehicles)
}

const listById = (req,res) => {
    let id = req.params.id - 1;
    res.json(dVehicles[id])
}

//Post Requests
const post = (req,res) => {
    let newVehicle = req.body
    newVehicle._id = dVehicles.length + 1;
    dVehicles.push(newVehicle)
    res.json(dVehicles)
}

module.exports = {
    list,listById, post
}