const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());

//mounted routers
app.use('/contacts', require('./routes/contacts'));
app.use('/vehicles', require('./routes/vehicles'));
app.use('/comments', require('./routes/comments'));
app.use('/products', require('./routes/products'));


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
