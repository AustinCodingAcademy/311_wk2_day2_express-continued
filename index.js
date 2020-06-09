const express = require("express");
const bodyParser = require("body-parser");

const contacts = require("./routers/contacts");
const vehicles = require("./routers/vehicles");
const comments = require("./routers/comments");
const products = require("./routers/products");

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
