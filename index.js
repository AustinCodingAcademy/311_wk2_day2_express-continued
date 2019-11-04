const express = require("express");
// creates express app
const app = express();

// initializes body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// display static site
app.use(express.static("public"));

// CRUD Comments
const commentRoutes = require('./routes/comments');
app.use(commentRoutes)

// CRUD Contacts
const contactRoutes = require('./routes/contacts');
app.use(contactRoutes)

// CRUD Products
const productRoutes = require('./routes/products');
app.use(productRoutes)

// CRUD Vehicles
const vehicleRoutes = require('./routes/vehicles');
app.use(vehicleRoutes)


// Start port?
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
