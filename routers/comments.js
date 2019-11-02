const express = require("express");
const bodyParser = require("body-parser");
//---------------Project Code Below------------------//

//Added Router Requirement
const commentList = require('../data/comments')
const router = express.Router()

let counter = commentList.length +1
//Middleware
router.use(bodyParser.json())
/* BEGIN - create routes here */

//GET method to get all products.
router.get("/comments", (req, res) => {
  res.json(commentList)
})

//GET method to get single user's information.

router.get('/comments/:productId', (req, res) => {
  
  //Create a variable to determing if a userID is found.
  const found = commentList.some(product => product._id === parseInt(req.params.productId));
  //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
  if(found) {
    res.json(commentList.filter(product => product._id === parseInt(req.params.productId)));
  } else {
    res.status(400).json({msg: `Contact ${req.params.productId} was not found.`})
  }
});

// //POST Method
router.post('/comments', (req, res) => {
    const newComment = {
      _id: counter,
      body: req.body.body,
      postId: req.body.postId
    }
    commentList.push(newComment)
    res.json(commentList)
    counter = counter + 1
})



// //PUT Method - update a user
router.put('/comments/:productId', (req, res) => {
  const found = commentList.some(product =>product._id === parseInt(req.params.productId))

  if(found) {
    const upProduct = req.body
    commentList.forEach(product => {
        if(product._id === parseInt(req.params.productId)){
            product._id = upProduct._id ? upProduct._id : product._id
            product.body = upProduct.body ? upProduct.body : product.body
            product.postId = upProduct.postId ? upProduct.postId : product.postId
            
          res.json ({msg: `The comment ${req.params.productId} was updated.`})
        }
      }) 
  }else{
    res.status(400).json({msg: `No comment with an id of ${req.params.productId} found.`})}
})



// //DELETE Method
router.delete('/comments/:productId', (req, res) => {
  //Create a variable to determing if a userID is found.
  const found = commentList.some(product => product._id === parseInt(req.params.productId));
  productIndex = parseInt(req.params.productId);
  deletedProductIndex = productIndex -1;

  //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
  if(found) {
    commentList[deletedProductIndex]["isActive"] = "false"
    res.send(`Comment ${productIndex} was successfully deleted`)

  //  res.json({ msg: `User ${req.params.id} deleted`, users: users.filter(user => user._id !== parseInt(req.params.id))});res.send("deleted")
  } else {
    res.status(400).json({msg: `Comment ${req.params.productId} not found`})
  }
 });

module.exports = router
