const express = require("express");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contacts");
const vehicleRoutes = require("./routes/vehicles");
const commentRoutes = require("./routes/comments");
const productRoutes = require("./routes/products");

const app = express();
const port = process.env.PORT || 4001;

// Express Static Middleware
app.use(express.static("public"));

// Add Body Parser Middleware
app.use(bodyParser.json());

// Routes
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

// Listener
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
