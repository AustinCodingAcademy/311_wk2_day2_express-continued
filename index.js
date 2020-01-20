const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());

//Routes

let contactsRoutes = require('./routes/contacts');
let vehiclesRoutes = require('./routes/vehicles');
let commentsRoutes = require('./routes/comments');
let productsRoutes = require('./routes/products');

app.use(contactsRoutes);
app.use(vehiclesRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
