const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const router = express.Router()
const productController = require('../controllers/products')

//Middleware
router.use(bodyParser.json())
/* BEGIN - create routes here */

//GET method to get all products.
router.get("/products", productController.getAllProducts)

//GET method to get single user's information.

router.get('/products/:productId', productController.getSpecifiedProduct)

// //POST Method
router.post('/products', productController.postNewProduct)

// //PUT Method - update a user
router.put('/products/:productId', productController.putProduct)

// //DELETE Method
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router
