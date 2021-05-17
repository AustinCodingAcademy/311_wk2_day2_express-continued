const vehicles = require("../data/vehicles")

function list(req, res) {
    res.json(vehicles)
}

function show(req, res) {
    vehicles.forEach(vehicle => {
        if(vehicle._id == req.params.id) {
            return res.json(vehicle)
        }
    })
    return res.send("no vehicle found")
}

function create(req, res) {
    let counter = vehicles.length
    vehicles.push({
        "_id": ++counter,
        "imgUrl": req.body.imgUrl,
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model,
        "price": req.body.price,
        "km": req.body.km,
        "miles": req.body.miles,
        "fuel": req.body.fuel,
        "city": req.body.city,
        "isNew": req.body.boolean,
        "postID": 1
    })

    res.json(vehicles[vehicles.length -1])
}

module.exports = {list, show, create}