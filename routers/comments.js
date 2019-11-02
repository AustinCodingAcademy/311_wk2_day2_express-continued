const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const router = express.Router()
//Controller links go here:
const commentController = require('../controllers/comments')

//Middleware
router.use(bodyParser.json())
/* BEGIN - create routes here */

//GET method to get all products.
router.get("/comments", commentController.getAllComments)

//GET method to get single user's information.
router.get('/comments/:productId', commentController.getSpecifiedComment)

// //POST Method
router.post('/comments', commentController.postNewComment)



// //PUT Method - update a user
router.put('/comments/:productId', commentController.putComment)



// //DELETE Method
router.delete('/comments/:productId', commentController.deleteComment);

module.exports = router
