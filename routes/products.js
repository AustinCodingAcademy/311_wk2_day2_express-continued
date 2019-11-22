const express = require('express');
const router = express.Router();
const ProductsControllers = require('../controllers/products');


router.get('/products', ProductsControllers.list);

router.get('/products/:id', ProductsControllers.show);
 
router.post('/products', ProductsControllers.create);
 
module.exports = router;



