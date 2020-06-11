// express instance, body parser
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// express app middleware
app.use(express.static('public'));
app.use(bodyParser.json());

const contacts = require('./routes/contacts');
const vehicles = require('./routes/vehicles');
const comments = require('./routes/comments');
const products = require('./routes/products');

const port = process.env.PORT || 4000;

// express routes
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});