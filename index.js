const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./routers/contacts");
const vehicles = require("./routers/vehicles");
const comments = require("./routers/comments");
const products = require("./routers/products");

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

// // --------------

// // ### Create express routes to get all things

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });

// app.get("/vehicles", (req, res) => {
//   res.json(vehicles);
// });

// app.get("/comments", (req, res) => {
//   res.json(comments);
// });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// // --------------

// // ### Create express routes to get one thing

// app.get("/contacts/:id", (req, res) => {
//   const findContacts = contacts.find(
//     (contact) => contact._id === parseInt(req.params.id)
//   );
//   res.json(findContacts);
// });

// app.get("/vehicles/:id", (req, res) => {
//   const findVehicles = vehicles.find(
//     (vehicle) => vehicle._id === parseInt(req.params.id)
//   );
//   res.json(findVehicles);
// });

// app.get("/comments/:id", (req, res) => {
//   const findComments = comments.find(
//     (comment) => comment._id === parseInt(req.params.id)
//   );
//   res.json(findComments);
// });

// app.get("/products/:id", (req, res) => {
//   const findProducts = products.find(
//     (product) => product._id === parseInt(req.params.id)
//   );
//   res.json(findProducts);
// });

// // --------------

// // ### Create express routes to create one thing

// // Contacts
// app.post("/contacts", (req, res) => {
//   let counter = contacts.length + 1;
//   let newContact = {
//     ...req.body,
//     postId: counter,
//   };
//   newContact._id = counter;
//   contacts.push(newContact);
//   res.json({ msg: "New Contact Added!", contact: newContact });
// });

// // Vehicles
// app.post("/vehicles", (req, res) => {
//   let counter = vehicles.length + 1;
//   let newVehicle = {
//     ...req.body,
//     postId: counter,
//   };
//   newVehicle._id = counter;
//   vehicles.push(newVehicle);
//   res.json({ msg: "New Contact Added!", vehicle: newVehicle });
// });

// // Comments
// app.post("/comments", (req, res) => {
//   let counter = comments.length + 1;
//   let newComment = {
//     ...req.body,
//     postId: 1,
//   };
//   newComment._id = counter;
//   comments.push(newComment);
//   res.json({ msg: "New Contact Added!", comment: newComment });
// });

// // Products
// app.post("/products", (req, res) => {
//   let counter = products.length + 1;
//   let newProduct = {
//     ...req.body,
//     postId: counter,
//   };
//   newProduct._id = counter;
//   products.push(newProduct);
//   res.json({ msg: "New Contact Added!", product: newProduct });
// });

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
