const express = require('express');
const router = express.Router();
const prodController = require('../controllers/products');

router.get('/products', prodController.list);
router.get('/products:id', prodController.show);
router.post('/products', prodController.create);



module.exports = router;
