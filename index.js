const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
const productRoutes = require("./routes/products");
const commentsRoutes = require("./routes/comments");
const vehiclesRoutes = require("./routes/vehicles");
const contactsRoutes = require("./routes/contacts");

//TK add
const router = express.Router();
app.use(express.static('public'))
app.use(bodyParser.json())

app.use(commentsRoutes);
app.use(productRoutes);
app.use(vehiclesRoutes);
app.use(contactsRoutes);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });
 


// let contacts = require('./data/contacts');
// let vehicles = require('./data/vehicles');
// let product = require('./data/products');

//CONTACT
// app.get('/contacts', (req, res) => {
//   res.json(contacts)
// })

// app.get('/contacts/:contactsId', (req,res) => {
//   let id = contacts.find(i => i._id == req.params.contactsId);
//   res.json(id)
// })

// app.post('/contacts', (req,res) => {
//   let newContact = req.body;
//   contacts.push(newContact)
//   res.json(newContact)
// })

//VEHICLES
// app.get('/vehicles', (req, res) => {
//   res.json(vehicles)
// })

// app.get('/vehicles/:vehiclesId', (req,res) => {
//   let id = vehicles.find(i => i._id == req.params.vehiclesId);
//   res.json(id)
// })

// app.post('/vehicles', (req,res) => {
//   let newVehicle = req.body;
//   vehicles.push(newVehicle)
//   res.json(newVehicle)
// })

//COMMENTS

//PRODUCT
// app.get('/products', (req, res) => {
//   res.json(product)
// })

// app.get('/products/:productsId', (req,res) => {
//   let id = product.find(i => i._id == req.params.productsId);
//   res.json(id)
// })

// app.post('/products', (req,res) => {
//   let newProduct = req.body;
//   product.push(newProduct)
//   res.json(newProduct)
// })

