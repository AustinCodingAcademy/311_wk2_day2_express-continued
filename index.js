const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
app.use(express.static('./public'))


//Routers
const rContacts = require('./routes/contacts')
const rVehicles = require('./routes/vehicles')
const rComments = require('./routes/comments')
const rProducts = require('./routes/products')


//Routes

app.use('/contacts', rContacts)
app.use('/vehicles', rVehicles)
app.use('/comments', rComments)
app.use('/products', rProducts)

const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});