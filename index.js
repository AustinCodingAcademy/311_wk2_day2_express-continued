const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'))
app.use(bodyParser.json())

const productsRoutes = require('./routes/products')
const vehiclesRoutes = require('./routes/vehicles')
const commentsRoutes = require('./routes/comments')
const contactsRoutes = require('./routes/contacts')

const port = process.env.PORT || 4001;

app.use(productsRoutes)
app.use(vehiclesRoutes)
app.use(commentsRoutes)
app.use(contactsRoutes)










app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
