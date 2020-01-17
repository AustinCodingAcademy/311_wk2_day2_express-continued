const express = require("express");
const contacts = require('./data/contacts')
const comments = require('./data/comments')
const vehicles = require('./data/vehicles')
const products = require('./data/products')
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'))
app.use(bodyParser.json())
const port = process.env.PORT || 4001;
let commentCounter = comments.length;
let contactCounter = contacts.length;
let productCounter = products.length;
let vehicleCounter = vehicles.length;



 //let the theIdImLookingFor = req.params.userId;
// console.log(theIdImLookingfor);
//THe variables are up for you
//let users = users.find(u=>u._id == theIdImLookingfor)

app.get('/contacts', (req, res) => {
  res.json(contacts)
 })

 app.get('/contacts/:id', (req, res) => {
  let idSearched = req.params.id
  const contact = contacts.find(contact=>contact._id == idSearched)
  res.json(contact)
 })

 app.post('/contacts', (req, res) => {
  let newContact = req.body;
  contactCounter += 1
  newContact._id = contactCounter
  contacts.push(newContact)
  res.json(contacts)
 })

app.get('/vehicles', (req, res) => {
res.json(vehicles)
})

app.get('/vehicles/:id', (req, res) => {
  let idSearched = req.params.id
  const vehicle = vehicles.find(vehicle=>vehicle._id == idSearched)
  res.json(vehicle)
  })

app.post('/vehicles', (req, res) => {
  let newVehicle = req.body;
  vehicleCounter += 1
  newVehicle._id = vehicleCounter
  vehicles.push(newVehicle)
  res.json(vehicles)
  })

app.get('/comments', (req, res) => {
res.json(comments)
})

app.get('/comments/:id', (req, res) => {
  let idSearched = req.params.id
  const comment = comments.find(comment=>comment._id == idSearched)
  res.json(comment)
})

app.post('/comments', (req, res) => {
  let newComment = req.body;
  commentCounter += 1
  newComment._id = commentCounter
  comments.push(newComment)
  res.json(comments)
  })

app.get('/products', (req, res) => {
res.json(products)
})

app.get('/products/:id', (req, res) => {
  let idSearched = req.params.id
  const product = products.find(product=>product._id == idSearched)
  res.json(product)
  })

  
app.post('/products', (req, res) => {
  let newProduct = req.body;
  productCounter += 1
  newProduct._id = productCounter
  products.push(newProduct)
  res.json(products)
  })


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
