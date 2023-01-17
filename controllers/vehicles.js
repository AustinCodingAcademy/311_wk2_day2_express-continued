const { vehicles } = require('../data');

module.exports = {
    list: (req, res) => { res.json(vehicles) },
    show: (req, res) => {
        res.json(vehicles.find(
            vehicle => vehicle._id === parseInt(req.params.id)
        ))},
        create: (req, res) => {
            const addInfo = {
                ...req.body,
                _id: vehicles[vehicles.length - 1]._id + 1
            }
            vehicles.push(addInfo);
            res.json(addInfo);
    }
}