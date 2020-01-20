const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./routes/contacts');
const vehicles = require('./routes/vehicles');
const comments = require('./routes/comments');
const products = require('./routes/products');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
