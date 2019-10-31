const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

const comments = require("./data/comments")
const contacts = require("./data/contacts")
const products = require("./data/products")
const vehicles = require("./data/vehicles")

//`app.get()`
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





app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
