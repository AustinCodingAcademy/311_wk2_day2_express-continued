const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contacts = require("./data/contacts")
const vehicles = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")


express.static('/public')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//GET CONTACTS
app.get('/contacts', (req, res) => {
 res.json(contacts)
})
//Get Vehicles
app.get('/vehicles', (req, res) => {
 res.json(vehicles)
})
 //GET Comments
app.get('/comments', (req, res) => {
 res.json(comments)
})
 //GET Pruducts
app.get('/products', (req, res) => {
 res.json(products)
})

//************************************************************************************************

//GET Contacts by ID
app.get('/contacts/:id', (req, res) => {
 contacts.forEach(contact => {
  if(contact._id == req.params.id) {
   return res.json(contact)
  }
 })
 return res.send("no contact found")
})



//Get Vehicles by ID
app.get('/vehicles/:id', (req, res) => {
 vehicles.forEach(vehicle => {
  if(vehicle._id == req.params.id) {
   return res.json(vehicle)
  }
 })
 return res.send("no vehicle found")
})



//GET Comments by ID
app.get('/comments/:id', (req, res) => {
 comments.forEach(comment => {
  if(comment._id == req.params.id) {
   return res.json(comment)
  }
 })
 return res.send("no comment found")
})



//GET Products by ID
app.get('/products/:id', (req, res) => {
 products.forEach(product => {
  if(product._id == req.params.id) {
   return res.json(product)
  }
 })
 return res.send("no product found")
})

//*********************************************************************************************

//post Vehicles
app.post('/contacts', (req, res) => {
 let counter = contacts.length
 contacts.push({
  "_id": ++counter,
  "name": req.body.name,
  "occupation": req.body.occupation,
  "avatar": "none",
  "postID": 1
 })
 res.json(contacts[contacts.length -1])
})



//post Vehicles
app.post('/vehicles', (req, res) => {
 let counter = vehicles.length
 vehicles.push({
  "_id": ++counter,
  "imgUrl": req.body.imgUrl,
  "year": req.body.year,
  "make": req.body.make,
  "model": req.body.model,
  "price": req.body.price,
  "km": req.body.km,
  "miles": req.body.miles,
  "fuel": req.body.fuel,
  "city": req.body.city,
  "isNew": req.body.boolean,
  "postID": 1
 })

 res.json(vehicles[vehicles.length -1])
})



//post Comments
app.post('/comments', (req, res) => {
 let counter = comments.length
 comments.push(req.body)
 res.json(comments[comments.length -1])
})



//Post Products
app.post('/products', (req, res) => {
 let counter = products.length
 products.push({
  "name": req.body.name,
  "description": req.body.description,
  "rating": req.body.rating,
  "imgUrl": req.body.imgUrl,
  "price": req.body.price,
  "category": req.body.category
 })
 res.json(products[products.length -1])
})








const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
