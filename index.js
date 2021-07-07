// include our libraries
const express = require("express");
const bodyParser = require("body-parser");

// initialize our app object
const app = express();

// set our app properties
app.use(bodyParser.json());
app.use(express.static('public'));

// set our paths for the routers
app.use(require('./routes/contacts'));
app.use(require('./routes/vehicles'));
app.use(require('./routes/comments'));
app.use(require('./routes/products'));

// decide which port to use
const port = process.env.PORT || 4001;

// start the server!
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
