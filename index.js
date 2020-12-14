const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts.js")
const vehicles = require("./data/vehicles.js")
const comments = require("./data/comments.js")
const products = require("./data/products.js")

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

const port = process.env.PORT || 4001;

// Add `app.get()` routes to get ALL things
app.get("/contacts", (req, res) => {
  return res.json(contacts)
})
app.get("/vehicles", (req, res) => {
  return res.json(vehicles)
})
app.get("/comments", (req, res) => {
  return res.json(comments)
})
app.get("/products", (req, res) => {
  return res.json(products)
})

// Add `app.get()` routes to get ONE thing
app.get("/contacts/:id", (req, res) => {
  let targetId = req.params.id -1
  return res.json(contacts[targetId])
})
app.get("/vehicles/:id", (req, res) => {
  let targetId = req.params.id -1
  return res.json(vehicles[targetId])
})
app.get("/comments/:id", (req, res) => {
  let targetId = req.params.id -1
  return res.json(comments[targetId])
})
app.get("/products/:id", (req, res) => {
  let targetId = req.params.id -1
  return res.json(products[targetId])
})

// Add `app.post()` routes
app.post("/contacts", (req, res) => {
  let counter = contacts.length
  let contact = req.body
  contact._id = counter + 1
  contacts.push(contact)
  return res.json(contacts[contact._id])
})
app.post("/vehicles", (req, res) => {
  let counter = vehicles.length
  let vehicle = req.body
  vehicle._id = counter + 1
  vehicles.push(vehicle)
  return res.json(vehicles[vehicle._id])
})
app.post("/comments", (req, res) => {
  let counter = comments.length
  let comment = req.body
  comment._id = counter + 1
  comments.push(comment)
  return res.json(comments[comment._id])
})
app.post("/products", (req, res) => {
  let counter = products.length
  let product = req.body
  product._id = counter + 1
  products.push(product)
  return res.json(products[product._id])
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
