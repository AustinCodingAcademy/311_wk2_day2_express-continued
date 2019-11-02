const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const productRoutes = require("./routes/products");
const products = require("./routes/products");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const port = process.env.PORT || 4001;

// app.use(productRoutes)
app.use(express.static('public'))

app.use(products)

app.use(contacts)

app.use(vehicles)

app.use(comments)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

