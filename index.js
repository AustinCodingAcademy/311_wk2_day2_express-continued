const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

// Contacts
app.use(require("./routes/contacts.js"));

// Vehicles
app.use(require("./routes/vehicles.js"));

// Comments
app.use(require("./routes/comments.js"));

// Products
app.use(require("./routes/products.js"));

// Port listening...
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
