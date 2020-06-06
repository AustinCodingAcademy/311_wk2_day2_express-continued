const express = require('express')
const router = express.Router()
const products = require('../data/products')

router.get('/products', (req, res) => {
    res.json(products)
  })

router.get('/products/:id', (req, res) => {
    let getId = products.find(user => user._id === parseInt(req.params.id))
    res.json(getId)
  })

router.post('/products', (req, res) => {
    const newProducts = {
        _id: req.body._1,
        name: req.body.name,
        description: req.body.name,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        category: req.body.category,
        reviews: req.body.reviews [
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            },
            {
                description: req.body.description,
                rating: req.body.rating
            }
        ]
    }
        
    products.push(newProducts)
    res.json(products)
        
    })

module.exports = router
