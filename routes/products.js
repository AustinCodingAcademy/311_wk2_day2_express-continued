const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

// Get ALL things
router.get('/', productsController.list)

// Get ONE thing
router.get('/:id', productsController.show)

// Create ONE thing
router.post('/:id', productsController.create)

module.exports = router;