const express = require('express');
const router = express.Router();
let productsController = require('../controllers/products')

router.get('/', productsController.list)
  
router.get('/:id', productsController.show)

router.post('/', productsController.create)

module.exports = router;