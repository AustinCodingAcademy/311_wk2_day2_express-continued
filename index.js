const express = require("express");
const bodyParser = require("body-parser");
const comments = require("./data/comments");
const contacts = require("./data/contacts");
const products = require("./data/products");
const vehicles = require("./data/vehicles");
const app = express();
let counter = function(arr) {
  return arr.length;
};

app.use(express.static("./public"));

//body Parser Using Middleware newest express extension instead of body-parser package
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/comments", (req, res) => {
  res.send(comments);
});
app.get("/comments/:id", (req, res) => {
  const found = comments.some(
    comment => comment._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      comments.filter(comment => comment._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No comment with ${req.params.id} was found` });
  }
});
//creating user by client
app.post("/comments", (req, res) => {
  const newComment = {
    _id: counter(comments) + 1,
    body: req.body.body,
    postId: 1
  };

  if (!newComment.body) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  comments.push(newComment);
  res.json(comments);
});

app.get("/contacts", (req, res) => {
  res.send(contacts);
});

app.get("/contacts/:id", (req, res) => {
  const found = contacts.some(
    contact => contact._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      contacts.filter(contact => contact._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No contact with ${req.params.id} was found` });
  }
});

app.post("/contacts", (req, res) => {
  const newContact = {
    _id: counter(contacts) + 1,
    name: req.body.name,
    ocupation: req.body.ocupation,
    avatar: req.body.avatar,
    postId: 1
  };

  if (!newContact.name || !newContact.ocupation || !newContact.avatar) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  contacts.push(newContact);
  res.json(contacts);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const found = products.some(
    product => product._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      products.filter(product => product._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No product with ${req.params.id} was found` });
  }
});

app.post("/products", (req, res) => {
  const newProduct = {
    _id: counter(products) + 1,
    name: req.body.name,
    description: req.body.description,
    postId: 1
  };

  if (!newProduct.name || !newProduct.description) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  products.push(newProduct);
  res.json(products);
});

app.get("/vehicles", (req, res) => {
  res.send(vehicles);
});
app.get("/vehicles/:id", (req, res) => {
  const found = vehicles.some(
    vehicle => vehicle._id === parseInt(req.params.id)
  );
  if (found) {
    res.json(
      vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No vehicle with ${req.params.id} was found` });
  }
});
app.post("/vehicles", (req, res) => {
  const newVehicle = {
    _id: counter(vehicles) + 1,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    postId: 1
  };

  if (!newVehicle.year || !newVehicle.make || !newVehicle.model) {
    return res.status(400).json({ msg: `Please fill up form ` });
  }
  vehicles.push(newVehicle);
  res.json(vehicles);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
