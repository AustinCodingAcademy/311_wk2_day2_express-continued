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
// get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});
// get one comment
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
// post new comment
app.post("/comments", (req, res) => {
  let counter = comments.length;
  const newComment = {
    _id: counter + 1,
    body: req.body.body,
    postID: 1
  };
  comments.push(newComment);
  res.json(comments);
});

// CRUD Contacts
// get all contacts
app.get("/contacts", (req, res) => {
  res.json(contacts);
});
// get one contact
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
// create new contact
app.post("/contacts", (req, res) => {
  let counter = contacts.length;
  let newContact = {
    _id: counter + 1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  contacts.push(newContact);
  res.json(contacts);
});

// CRUD Products
// get all products
app.get("/products", (req, res) => {
  res.json(products);
});
// get one product
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
// create new product
app.post("/products", (req, res) => {
  let counter = products.length;
  const newProduct = {
    _id: counter + 1,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  };
  products.push(newProduct);
  res.json(products);
});

// CRUD Vehicles
// get all vehicles
app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});
// get one vehicle
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
// create new vehicle
app.post('/vehicles', (req, res) => {
  let counter = vehicles.length;
  const newVehicle = {
    _id: counter + 1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  }
  vehicles.push(newVehicle)
  res.json(vehicles)
});


// Start port?
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
