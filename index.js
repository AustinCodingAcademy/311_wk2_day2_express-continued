const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const commentRoutes = require("./routes/comments");
const contactRoutes = require("./routes/contacts");
const vehicleRoutes = require("./routes/vehicles");
const productRoutes = require("./routes/products");

let counter = function(arr) {
  return arr.length;
};

app.use(express.static("./public"));
app.use(commentRoutes);
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);

//body Parser Using Middleware newest express extension instead of body-parser package
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
