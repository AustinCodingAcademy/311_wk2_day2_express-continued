const express = require('express');
const router = express.Router();
let controllerProducts = require('../controller/controllerProducts');

router.get('/', controllerProducts.productsGet);
router.get('/:id', controllerProducts.productsGetId);
router.post('/', controllerProducts.productsPost);
router.put('/:id', controllerProducts.productsPut);
router.delete('/:id', controllerProducts.productsDelete);

module.exports = router;