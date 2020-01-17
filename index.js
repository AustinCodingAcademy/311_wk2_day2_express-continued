const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const products = require('./data/products');
const comments = require('./data/comments');

app.use(express.static('public'));
app.use(bodyParser.json());

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
  res.json(products);
});

app.get('/contacts/:id', (req, res) => {
  let id = req.params.id;
  let contact = contacts.find(contact => contact._id == id);
  res.json(contact)
});

app.get('/vehicles/:id', (req, res) => {
  let id = req.params.id;
  let vehicle = vehicles.find(vehicle => vehicle._id == id);
  res.json(vehicle);
});

app.get('/comments/:id', (req, res) => {
  let comment = comments.find(comment => comment._id == req.params.id);
  res.send(comment);
});

app.get('/products/:id', (req, res) => {
  let product = products.find(product => product._id == req.params.id);
  res.send(product);
});


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
