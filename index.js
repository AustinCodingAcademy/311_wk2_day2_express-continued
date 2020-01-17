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
  res.json(comment);
});

app.get('/products/:id', (req, res) => {
  let product = products.find(product => product._id == req.params.id);
  res.json(product);
});

let vehicleCounter = vehicles.length;
let commentCounter = comments.length;
let productCounter = products.length;

app.post('/contacts', (req, res) => {
  let id = contacts.length + 1;
  let body = req.body;
  body.id = id;
  contacts.push(body);
  res.json(body);
})

app.post('/comments', (req, res)=> {
  commentCounter++
  let body = req.body;
  body._id = commentCounter;
  comments.push(body)
  res.json(body);
})

app.post('/vehicles', (req, res)=> {
  vehicleCounter++
  let body = req.body;
  body._id = vehicleCounter;
  vehicles.push(body);
  res.json(body);
})

app.post('/products', (req, res)=> {
  productCounter++
  let body = req.body;
  body._id = productCounter;
  products.push(body);
  res.json(body);
})


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
