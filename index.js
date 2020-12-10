const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts.js");
const vehicles = require("./data/vehicles.js");
const comments = require("./data/comments.js");
const products = require("./data/products.js");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

// Contacts
app.get("/contacts", (req, res) => {
  return res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(contacts[id]);
});

app.post("/contacts", (req, res) => {
  let counter = contacts.length;
  let newContact = req.body;
  newContact._id = counter + 1;
  contacts.push(newContact);
  return res.json(contacts[newContact._id - 1]);
});

// Vehicles
app.get("/vehicles", (req, res) => {
  return res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(vehicles[id]);
});

app.post("/vehicles", (req, res) => {
  let counter = vehicles.length;
  let newVehicle = req.body;
  newVehicle._id = counter + 1;
  vehicles.push(newVehicle);
  return res.json(vehicles[newVehicle._id - 1]);
});

// Comments
app.get("/comments", (req, res) => {
  return res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(comments[id]);
});

app.post("/comments", (req, res) => {
  let counter = comments.length;
  let newComment = req.body;
  newComment._id = counter + 1;
  comments.push(newComment);
  return res.json(comments[newComment._id - 1]);
});

// Products
app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(products[id]);
});

app.post("/products", (req, res) => {
  let counter = products.length;
  let newProduct = req.body;
  newProduct._id = counter + 1;
  products.push(newProduct);
  return res.json(products[newProduct._id - 1]);
});

// Port listening...
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
