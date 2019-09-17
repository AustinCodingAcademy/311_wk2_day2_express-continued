const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')
//const {list,show,create,update,remove} = require('../controllers/products')

//productS
router.get('/products', productsController.list)
router.get('/product/:id', productsController.show)
router.post('/products', productsController.create)
// router.put('/products', update)
// router.delete('/products', remove)

module.exports = router;