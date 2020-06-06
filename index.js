const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())

//
const contactRoutes = require('./routes/contacts')
const vehicleRoutes = require('./routes/vehicles')
const commentRoutes = require('./routes/comments')
const productRoutes = require('./routes/products')

//
app.use(contactRoutes)
app.use(vehicleRoutes)
app.use(commentRoutes)
app.use(productRoutes)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
