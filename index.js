const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

//
const contacts = require('./data/contacts')
const vehicles = require('./data/vehicles')
const comments = require('./data/comments')
const products = require('./data/products')

//
app.get('/data/contacts', (req, res) => res.json(contacts))
app.get('/data/vehicles', (req, res) => res.json(vehicles))
app.get('/data/comments', (req, res) => res.json(comments))
app.get('/data/products', (req, res) => res.json(products))

//
app.get('/data/contacts/:id', (req, res) => {
  res.json (contacts.find (x => {
    return +req.params.id === x._id
  }))
})

app.get('/data/vehicles/:id', (req, res) => {
  res.json (vehicles.find(x => {
    return +req.params.id === x._id
  }))
})

app.get('/data/comments/:id', (req, res) => {
  res.json (comments.find(x => {
    return +req.params.id === x._id
  }))
})

app.get('/data/products/:id', (req, res) => {
  res.json (products.find(x => {
    return +req.params.id === x._id
  }))
})

// 
app.post('/data/contacts', (req, res) => {
  let newID = contacts.length + 1

  let newContact = {
    _id: newID,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }

  contacts.push(newContact)
  res.json(contacts)
})

app.post('/data/vehicles', (req, res) => {
  let newID = vehicles.length + 1

  let newVehicle = {
    _id: newID,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: false
  }

  vehicles.push(newVehicle)
  res.json(vehicles)
})

app.post('/data/comments', (req, res) => {
  let newID = comments.length + 1

  let newComment = {
    _id: newID,
    body: req.body.body,
    postId: req.body.postId
  }

  comments.push(newComment)
  res.json(comments)
})

app.post('/data/products', (req, res) => {
  let newID = products.length + 1

  let newProduct = {
    _id: newID,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    reveiws: req.body.reviews
  }

  products.push(newProduct)
  res.json(products)
})

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
