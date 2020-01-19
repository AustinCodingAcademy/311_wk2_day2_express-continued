const express = require("express");
const bodyParser = require("body-parser");
let contactRoutes = require("./routes/contacts");
let vehicleRoutes = require("./routes/vehicles");
let commentRoutes = require("./routes/comments");
let productRoutes = require("./routes/products");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// define port
const port = process.env.PORT || 4000;

// use routes defined in variables above
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

// open port
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
