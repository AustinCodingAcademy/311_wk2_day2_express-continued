const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

const productRoutes = require('./routes/products');
const contactRoutes = require('./routes/contacts');
const vehicleRoutes = require('./routes/vehicles');
const commentRoutes = require('./routes/comments');

app.use(productRoutes);
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);

app.use(express.static('public'));
app.use(bodyParser.json())

  
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


