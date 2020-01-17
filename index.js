const express = require("express");
const contacts = require('./data/contacts.js');
const vehicles = require('.data/vehicles');
const comments = require('.data/comments');
const products = require('.data/products');
const bodyParser = require("body-parser");
const port = process.env.PORT || 4001;
const app = express();
app.use(express.static('public'))
bodyParser.json()


app.get('/contacts', (req, res) => {
  res.json(contacts)
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles)
});

app.get('/comments', (req, res) => {
  res.json(comments)
});

app.get('/products', (req, res) => {
  res.json(products)
});

// app.get('/contacts/:id', (req, res) => {
//   let searchId = req.params.search
//   const contact = contacts.find(contact => {
//     return contact._id === id
// })

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
