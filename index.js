const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// const comments = require("./data/comments");
// const contacts = require("./data/contacts");
// const products = require("./data/products");
// const vehicles = require("./data/vehicles");
const comments = require("./routes/comments");
const contacts = require("./routes/contacts");
const products = require("./routes/products");
const vehicles = require("./routes/vehicles");

app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

const port = process.env.PORT || 4001;
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

/* BEGIN - create routes here */

// Create express routes to get all things

// app.get("/comments", (req, res) => {
//   res.json(comments);
// });

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

//  app.get("/vehicles", (req, res) => {
//    res.json(vehicles);
//  });

// Create express routes to get one thing

// app.get("/comments/:id", (req, res) => {
//   let obj = comments.find(item => item._id == req.params.id);
//   console.log("comments obj", obj);

//   res.json(obj.body);
// });

// app.get("/contacts/:id", (req, res) => {
//   let obj = comments.find(item => item._id == req.params.id);
//   console.log("contacts obj", obj);

//   res.json(obj.body);
// });

// app.get("/products/:id", (req, res) => {
//   let obj = comments.find(item => item._id == req.params.id);
//   console.log("products obj", obj);

//   res.json(obj.body);
// });

// app.get("/vehicles/:id", (req, res) => {
//   let obj = comments.find(item => item._id == req.params.id);
//   console.log("vehicles obj", obj);

//   res.json(obj.body);
// })

// Create express routes to create one thing
// * Add `app.post()`

// app.post("/contacts", (req, res) => {
//   let contact = req.body;
//   console.log(contact);
//   contact._id += 1;

//   contacts.push(contact);
//   res.json(contact);
// });
// app.post("/comments", (req, res) => {
//   let comments = req.body;
//   console.log(contact);
//   contact._id += 1;

//   comments.push(contact);
//   res.json(contact);
// });
// app.post("/products", (req, res) => {
//   let contact = req.body;
//   console.log(contact);
//   contact._id += 1;

//   products.push(contact);
//   res.json(contact);
// });
// app.post("/vehicles", (req, res) => {
//   let contact = req.body;
//   console.log(contact);
//   contact._id += 1;

//   vehicles.push(contact);
//   res.json(contact);
// });
