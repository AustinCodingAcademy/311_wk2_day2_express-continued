const express = require("express");
const bodyParser = require("body-parser");
const comments = require("./routes/comments");
const products = require("./routes/products");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
// ----------GET requests----------
app.use(contacts);
app.use(comments);
app.use(products);
app.use(vehicles);
// -------------Post requests----------
