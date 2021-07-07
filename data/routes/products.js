const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

//Get All Things
router.get('/', productsController.list)

//Get One Thing
router.get('/:id', productsController.show)

//Create One Thing
router.post('/:id', productsController.create)

module.exports = router;