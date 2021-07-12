// index.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/comments', require('./routes/routesComments'))
app.use('/contacts', require('./routes/routesContacts'))
app.use('/products', require('./routes/routesProducts'))
app.use('/vehicles', require('./routes/routesVehicles'))

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});