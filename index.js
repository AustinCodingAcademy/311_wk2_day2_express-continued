// Index File Week2 Day #2 - Justin Essler 

// import 3rd party
const express = require("express");
const bodyParser = require("body-parser");

// import 1st party
// const contacts = require("./data/contacts");
// const comments = require("./data/comments");
// const products = require("./data/products");
// const vehicles = require("./data/vehicles");
const contactsRoutes = require("./routes/contacts");
const commentsRoutes = require("./routes/comments");
const productsRoutes = require("./routes/products");
const vehiclesRoutes = require("./routes/vehicles");

// variables
const app = express();
const port = process.env.PORT || 4001;

// middleware - express, bodyParser, and routes middleware
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

























// * Add `app.get()` routes for the following:
//   * "/contacts"
//   * "/vehicles"
//   * "/comments"
//   * "/products"




// app.get("/contacts", (req, res) => {
//     res.json(contacts);
// })
// app.get("/comments", (req, res) => {
//     res.json(comments);
// })
// app.get("/products", (req, res) => {
//     res.json(products);
// })
// app.get("/vehicles", (req, res) => {
//     res.json(vehicles);
// })



// * Add `app.get()` routes for the following:
//   * "/contacts/:id"
//   * "/vehicles/:id"
//   * "/comments/:id"
//   * "/products/:id"


// app.get("/comments/:id", (req, res) => {
//     const id = req.params.id;
//     const foundComment = comments.find(comment => comment._id === Number(id))
//     res.json(foundComment);
// })
// app.get("/contacts/:id", (req, res) => {
//     const id = req.params.id;
//     const foundContact = contacts.find(contact => contact._id === Number(id))
//     console.log(foundContact);
//     res.json();
// });
// app.get("/products/:id", (req, res) => {
//     res.json(products);



// })
// app.get("/vehicles/:id", (req, res) => {
//     const id = req.params.id;
//     const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id))
//     console.log(foundVehicle);
//     res.json(vehicles);
// })
