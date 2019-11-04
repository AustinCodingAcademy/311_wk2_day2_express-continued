const express = require("express");
const bodyParser = require("body-parser");

// Database Folder Variables
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const app = express();

// Routes for Later
// const productRoutes = require('./routes/products');
// After move routes to Products
// app.use(ProductRoutes);

const port = process.env.PORT || 4001;

// Express Static Middleware
app.use(express.static("public"));

// Add Body Parser Middleware
app.use(bodyParser.json());

// Routes to all elements in each array
app.get("/contacts", (req, res) => res.json(contacts));
app.get("/vehicles", (req, res) => res.json(vehicles));
app.get("/comments", (req, res) => res.json(comments));
app.get("/products", (req, res) => res.json(products));

// Routes to single element in each array
app.get("/contacts/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  console.log(singleItemById);
  const oneContact = res.json(
    contacts.find(contact => contact._id === singleItemById)
  );
  res.json(oneContact);
});

app.get("/vehicles/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneVehicle = res.json(
    vehicles.find(vehicle => vehicle._id === singleItemById)
  );
  res.json(oneVehicle);
});

app.get("/comments/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneComment = res.json(
    comments.find(comment => comment._id === singleItemById)
  );
  res.json(oneComment);
});

app.get("/products/:id", (req, res) => {
  const singleItemById = parseInt(req.params.id);
  const oneProduct = res.json(
    products.find(product => product._id === singleItemById)
  );
  res.json(oneProduct);
});

// POST Section
// ID Base Number Variables
let contactIdBase = contacts.length + 1;
let vehicleIdBase = vehicles.length + 1;
let commentsIdBase = comments.length + 1;
let productsIdBase = products.length + 1;

// Routes to POST new item into Array
app.post("/contacts", (req, res) => {
  const newContact = {
    _id: contactIdBase++,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
    postId: 1
  };
  contacts.push(newContact);
  res.json(contacts);
});

app.post("/vehicles", (req, res) => {
  const newVehicle = {
    _id: vehicleIdBase++,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew,
    postId: 1
  };
  vehicles.push(newVehicle);
  res.json(vehicles);
});

app.post("/comments", (req, res) => {
  const newComment = {
    _id: commentsIdBase++,
    body: req.body.body,
    postId: 1
  };

  comments.push(newComment);
  res.json(comments);
});

app.post("/products", (req, res) => {
  const newProduct = {
    _id: productsIdBase++,
    name: req.body.name,
    description: req.body.description
  }
  products.push(newProduct);
  res.json(products);
});

// Listener
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
