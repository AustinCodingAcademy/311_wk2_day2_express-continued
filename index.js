const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

const comments = require("./data/comments")
const contacts = require("./data/contacts")
const products = require("./data/products")
const vehicles = require("./data/vehicles")

//app.use()
// app.use(bodyParser.json ())

//app.get()
app.get('/comments', (req, res) => {
  res.json(comments);
})

app.get('/contacts', (req, res) => {
  res.json(contacts);
})

app.get('/products', (req, res) => {
  res.json(products);
})

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
})


//app.get(/:userId`) 
app.get('/comments/:userId', (req, res) => {
  let commentsId = parseInt(req.params.userId)
  let commentsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < comments.length; i++) {
    if (i + 1 === commentsId)  {
      res.json(comments[commentsIndex])
    }   
  }
})

app.get('/contacts/:userId', (req, res) => {
  let contactsId = parseInt(req.params.userId)
  let contactsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < contacts.length; i++) {
    if (i + 1 === contactsId)  {
      res.json(contacts[contactsIndex])
    }   
  }
})

app.get('/products/:userId', (req, res) => {
  let productsId = parseInt(req.params.userId)
  let productsIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < products.length; i++) {
    if (i + 1 === productsId)  {
      res.json(products[productsIndex])
    }   
  }
})

app.get('/vehicles/:userId', (req, res) => {
  let vehiclesId = parseInt(req.params.userId)
  let vehiclesIndex = parseInt(req.params.userId) - 1;
  
  for (let i = 0; i < vehicles.length; i++) {
    if (i + 1 === vehiclesId)  {
      res.json(vehicles[vehiclesIndex])
    }   
  }
})

//app.post()
app.post('/comments', (req, res) => {
  comments.push(req.body); 
  let newComment = comments[comments.length -1]
  newComment._id = counter
  counter++
  console.log(req.body)
  res.json(newComment)
})

app.post('/contacts', (req, res) => {
  contacts.push(req.body); 
  let newContact = contacts[contacts.length -1]
  newContact._id = counter
  counter++
  console.log(req.body)
  res.json(newContact)
})

app.post('/products', (req, res) => {
  products.push(req.body); 
  let newProduct = products[products.length -1]
  newProduct._id = counter
  counter++
  console.log(req.body)
  res.json(newProduct)
})

app.post('/vehicles', (req, res) => {
  vehicles.push(req.body); 
  let newVehicle = vehicles[vehicles.length -1]
  newVehicle._id = counter
  counter++
  console.log(req.body)
  res.json(newVehicle)
})



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
