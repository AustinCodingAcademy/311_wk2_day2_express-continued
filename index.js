const express = require("express");
const bodyParser = require("body-parser");
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




// Listener
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
