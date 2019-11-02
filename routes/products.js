const express = require('express');
const router  = express.Router();
const productsController = require('../controllers/products')

// const { list, show, create } = require('../routes/products')

router.get('/products', productsController.list)
router.get('/product/:id', productsController.show)
router.post('/products', productsController.create)

// router.get( '/products', (req,res) => {
// 	res.json( list() )
// })

// router.get( '/products/:id', (req, res) => {
// 	res.json( show( req.params.id ) )
// })

// router.post( '/products', (req, res) => {
// 	res.json( create( req.body ) )
// })

module.exports = router;