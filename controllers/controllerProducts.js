const dProducts = require('../data/products')


//Get Requests
const list = (req,res) => {
    res.json(dProducts)
}

const listById = (req,res) => {
    let id = req.params.id - 1;
    res.json(dProducts[id])
}

//Post Requests
const post = (req,res) => {
    let newPost = req.body
    newPost._id = dProducts.length + 1;
    dProducts.push(newPost);
    res.json(dProducts)
}

module.exports = {
    list, listById, post
}