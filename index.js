const express = require("express");
const bodyParser = require("body-parser");
// const contacts = require('./data/contacts');
// const vehicles = require('./data/vehicles');
// const comments = require('./data/comments');
// const products = require('./data/products');

// Declaring my routes
let commentRoutes = require('./routes/comments');
let contactRoutes = require('./routes/contacts');
let productRoutes = require('./routes/products');
let vehicleRoutes = require('./routes/vehicles');


const app = express();
const port = process.env.PORT || 4000;
app.use(express.static('public'))
app.use(bodyParser.json());

//Routers
app.use(commentRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);





app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
