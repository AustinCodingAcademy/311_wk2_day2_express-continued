const express = require("express");
const bodyParser = require("body-parser");
// const contacts = require("./data/contacts");
// const vehicles = require("./data/vehicles");
// const comments = require("./data/comments");
// const products = require("./data/products");
const vehiclesRoutes = require("./routes/vehicles");
const contactsRoutes = require("./routes/contacts");
const commentsRoutes = require("./routes/comments");
const productsRoutes = require("./routes/products");

const app = express();

//static
app.use(express.static("public"));
//body.parser
app.use(bodyParser.json());

app.use(contactsRoutes);
app.use(vehiclesRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);

//create express routes to get all things
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

//create express routes to get one thing
//you would typically put comment id with comment and vehicle id with vehicle and so on

// app.get("/contacts/:id", (req, res) => {
//   const id = req.params.id;
//   const foundContact = contacts.find(contact => contact._id === Number(id));
//   res.json(foundContact);
// });
// app.get("/vehicles/:id", (req, res) => {
//   const id = req.params.id;
//   const foundVehicles = vehicles.find(vehicles => vehicles._id === Number(id));
//   res.json(foundVehicles);
// });
// app.get("/comments/:id", (req, res) => {
//   const id = req.params.id;
//   const foundComments = comments.find(comments => comments._id === Number(id));
//   res.json(foundComments);
// });
// app.get("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const foundProducts = products.find(products => products._id === Number(id));
//   res.json(foundProducts);
// });

//---------------------
//create routes to create one thing
//const contactCounter = contacts.length;
// app.post("/contacts", (req, res) => {
//   let newContact = {
//   _id: contactCounter + 1,
//   body: req.body.body,
//   postId: 1
// };
// contacts.push(newContact);
// res.json(contacts);
// });

// const vehicleCounter = vehicles.length;
// app.post("/vehicles", (req, res) => {
//let newVehicle = {
//   _id: vehicleCounter + 1,
//   body: req.body.body,
//   postId: 1
// };
// vehicles.push(newVehicle);
// res.json(vehicles);
//});

//const commentsCounter = comments.legnth;
// app.post("/comments", (req, res) => {
//let newComment = {
//   _id: commentsCounter + 1,
//   body: req.body.body,
//   postId: 1
// };
// comments.push(newComment);
// res.json(comments);
//});

//const productsCounter = product.length;
// app.post("/products", (req, res) => {
//let newProduct = {
//   _id: productCounter + 1,
//   body: req.body.body,
//   postId: 1
// };
// products.push(newProduct);
// res.json(productss);
//});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
