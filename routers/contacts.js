const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const router = express.Router()
//controller links go here:
const contactController = require('../controllers/contacts')

//Middleware
router.use(bodyParser.json())

/* BEGIN - create routes here */

//GET method to get all products.
router.get("/contacts",contactController.contactGetAll)

//GET method to get single user's information.
router.get('/contacts/:productId', contactController.contactGetSpecified)

//POST Method
router.post('/contacts', contactController.postContact)



//PUT Method - update a user
router.put('/contacts/:productId', contactController.putContact)



// //DELETE Method
router.delete('/contacts/:productId', contactController.deleteContact);

module.exports = router