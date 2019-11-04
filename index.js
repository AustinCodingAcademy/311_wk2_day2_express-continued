const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

app.use('/', express.static('public'));
app.use( bodyParser.json() );

const commentRoute = require('./routes/comments');
const contactRoute = require('./routes/contacts');
const productRoute = require('./routes/products');
const vehicleRoute = require('./routes/vehicles');

app.use( commentRoute )
app.use( contactRoute )
app.use( productRoute )
app.use( vehicleRoute )




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
