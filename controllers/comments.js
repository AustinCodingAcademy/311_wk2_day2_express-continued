const commentList = require('../data/comments')
let counter = commentList.length +1

//Get all Comments:
exports.getAllComments =  (req, res) => {
    res.json(commentList)
  }
//Get Specified Comment:
  exports.getSpecifiedComment = (req, res) => {
//Create a variable to determing if a userID is found.
    const found = commentList.some(product => product._id === parseInt(req.params.productId));
//Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      res.json(commentList.filter(product => product._id === parseInt(req.params.productId)));
    } else {
      res.status(400).json({msg: `Contact ${req.params.productId} was not found.`})
    }
  }

//Post a new Comment:
exports.postNewComment = (req, res) => {
    const newComment = {
      _id: counter,
      body: req.body.body,
      postId: req.body.postId
    }
    commentList.push(newComment)
    res.json(commentList)
    counter = counter + 1
}

//Update an existing comment:
exports.putComment = (req, res) => {
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
  }

  //Delete Comment:
  exports.deleteComment = (req, res) => {
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
   }