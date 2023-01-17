const { products } = require('../data');

module.exports = {
    list: (req, res) => { res.json(products) },
    show: (req, res) => {
        res.json(products.find(
            product => product._id === parseInt(req.params.id)
    ))},

            create: (req, res) => {
                const addInfo = {
                    ...req.body,
                    _id: products[products.length - 1]._id + 1
                }

            products.push(addInfo);
            res.json(addInfo)
    }
}