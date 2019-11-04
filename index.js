const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const contactRoutes = require("./routes/contacts");
const vehicleRoutes = require("./routes/vehicles");
const commentRoutes = require("./routes/comments");
const productRoutes = require("./routes/products");
const port = process.env.PORT || 4001;

// app.use is how one one applies middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);



app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
