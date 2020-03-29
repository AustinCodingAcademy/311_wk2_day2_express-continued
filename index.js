const express = require("express");

const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const port = process.env.PORT || 4001;

let lastContactsId = contacts.length;
let lastVehiclesId = vehicles.length;
let lastCommentsId = comments.length;
let lastProductsId = products.length;


app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.get('/contacts/:id', (req, res) => {
    let contact = contacts.find(contact => contact._id == req.params.id);
    res.json(contact);
});

app.post('/contacts', (req, res) => {
    let newEntry = req.body;
    let newId = lastContactsId++;
    newEntry._id = newId;
    contacts.push(newEntry);
});


app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});

app.get('/vehicles/:id', (req, res) => {
    let vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
    res.json(vehicle);
});

app.post('/vehicles', (req, res) => {
    let newEntry = req.body;
    let newId = lastVehiclesId++;
    newEntry._id = newId;
    vehicles.push(newEntry);
});



app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    let comment = comments.find(comment => comment._id == req.params.id);
    res.json(comment);
});

app.post('/comments', (req, res) => {
    let newEntry = req.body;
    let newId = lastCommentsId++;
    newEntry._id = newId;
    comments.push(newEntry);
});



app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    let product = products.find(product => product._id == req.params.id);
    res.json(product);
});

app.post('/products', (req, res) => {
    let newEntry = req.body;
    let newId = lastProductsId++;
    newEntry._id = newId;
    products.push(newEntry);
});





app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
