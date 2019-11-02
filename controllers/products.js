const productList = require('../data/products')
let counter = productList.length +1

//Get all Products:
exports.getAllProducts = (req, res) => {
    res.json(productList)
  }

//Get specific product:
exports.getSpecifiedProduct = (req, res) => {
    //Create a variable to determing if a userID is found.
    const found = productList.some(product => product._id === parseInt(req.params.productId));
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      res.json(productList.filter(product => product._id === parseInt(req.params.productId)));
    } else {
      res.status(400).json({msg: `Product ${req.params.productId} not found`})
    }
  }

//Post a New Product:
exports.postNewProduct = (req, res) => {
    const newProduct = {
      _id: counter,
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      reviews: req.body.reviews
    }
    productList.push(newProduct)
    res.json(productList)
    counter = counter + 1
}

//Update New Product:
exports.putProduct = (req, res) => {
    const found = productList.some(product =>product._id === parseInt(req.params.productId))
  
    if(found) {
      const upProduct = req.body
      productList.forEach(product => {
          if(product._id === parseInt(req.params.productId)){
              product._id = upProduct._id ? upProduct._id : product._id
              product.name = upProduct.name ? upProduct.name : product.name
              product.description = upProduct.description ? upProduct.description : product.description
              product.rating = upProduct.rating ? upProduct.rating : product.rating
              product.imgUrl = upProduct.imgUrl ? upProduct.imgUrl : product.imgUrl
              product.price = upProduct.price ? upProduct.price : product.price
              product.catagory = upProduct.catagory ? upProduct.catagory : product.catagory
              product.reviews = upProduct.reviews ? upProduct.reviews : product.reviews
            res.json ({msg: `The user ${req.params.productId} was updated.`})
          }
        }) 
    }else{
      res.status(400).json({msg: `No user with the id of ${req.params.productId}`})}
  }

  //Delete Product:
  exports.deleteProduct = (req, res) => {
    //Create a variable to determing if a userID is found.
    const found = productList.some(product => product._id === parseInt(req.params.productId));
    productIndex = parseInt(req.params.productId);
    deletedProductIndex = productIndex -1;
  
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      productList[deletedProductIndex]["isActive"] = "false"
      res.send(`Product ${productIndex} was successfully deleted`)
  
    //  res.json({ msg: `User ${req.params.id} deleted`, users: users.filter(user => user._id !== parseInt(req.params.id))});res.send("deleted")
    } else {
      res.status(400).json({msg: `Product ${req.params.productId} not found`})
    }
   }