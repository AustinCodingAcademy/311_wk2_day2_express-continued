const contactList = require('../data/contacts')
let counter = contactList.length +1

//Get All Contacts
exports.contactGetAll = (req, res) => {
    res.json(contactList)
  }

//Get Specified Contact

  exports.contactGetSpecified = (req, res) => {
    //Create a variable to determing if a userID is found.
    const found = contactList.some(product => product._id === parseInt(req.params.productId));
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      res.json(contactList.filter(product => product._id === parseInt(req.params.productId)));
    } else {
      res.status(400).json({msg: `Contact ${req.params.productId} was not found.`})
    }
  }

  //Post New Contact
  exports.postContact =  (req, res) => {
    const newContact = {
      _id: counter,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar
    }
    contactList.push(newContact)
    res.json(contactList)
    counter = counter + 1
}

//Put new info in existing contact
exports.putContact = (req, res) => {
    const found = contactList.some(product =>product._id === parseInt(req.params.productId))
  
    if(found) {
      const upProduct = req.body
      contactList.forEach(product => {
          if(product._id === parseInt(req.params.productId)){
              product._id = upProduct._id ? upProduct._id : product._id
              product.name = upProduct.name ? upProduct.name : product.name
              product.occupation = upProduct.occupation ? upProduct.occupation : product.occupation
              product.avatar = upProduct.avatar ? upProduct.avatar : product.avatar
              
            res.json ({msg: `The contact ${req.params.productId} was updated.`})
          }
        }) 
    }else{
      res.status(400).json({msg: `No contact with an id of ${req.params.productId} found.`})}
  }

  //Delete Contact

  exports.deleteContact = (req, res) => {
    //Create a variable to determing if a userID is found.
    const found = contactList.some(product => product._id === parseInt(req.params.productId));
    productIndex = parseInt(req.params.productId);
    deletedProductIndex = productIndex -1;
  
    //Create an if statement to return the user info if the ID is found, and an error if the ID is not found.
    if(found) {
      contactList[deletedProductIndex]["isActive"] = "false"
      res.send(`Contact ${productIndex} was successfully deleted`)
  
    //  res.json({ msg: `User ${req.params.id} deleted`, users: users.filter(user => user._id !== parseInt(req.params.id))});res.send("deleted")
    } else {
      res.status(400).json({msg: `Contact ${req.params.productId} not found`})
    }
   }