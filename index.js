const express = require("express");
// creates express app
const app = express();

// access routes
const { comments } = require("./data/comments");
const { contacts } = require("./data/contacts");
const { products } = require("./data/products");
const { vehicles } = require("./data/vehicles");

// initializes body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// display static site
app.use(express.static("public"));

// CRUD Comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  let comment = comments.find(
    comment => comment._id === parseInt(req.params.id)
  );
  if (comment !== undefined) {
    return res.json(comment);
  } else {
    return res.json({ msg: `Comment ID #${req.params.id} does not exist...` });
  }
});

// CRUD Contacts
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
  let contact = contacts.find(
    contact => contact._id === parseInt(req.params.id)
  );

  if (contact !== undefined) {
    return res.json(contact);
  } else {
    return res.json({ msg: `Contact ID #${req.params.id} does not exist...` });
  }
});

// CRUD Products
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  let product = products.find(
    product => product._id === parseInt(req.params.id)
  );
  if (product !== undefined) {
    return res.json(product);
  } else {
    return res.json({ msg: `Product ID #${req.params.id} does not exist...` });
  }
});

// CRUD Vehicles
app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
  let vehicle = vehicles.find(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (vehicle !== undefined) {
    return res.json(vehicle);
  } else {
    return res.json({ msg: `Vehicle ID #${req.params.id} does not exist...` });
  }
});

// Start port?
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
