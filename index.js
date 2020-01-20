const express = require("express");

const bodyParser = require("body-parser");
const app = express();


app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/comments', require('./routes/comments'))
app.use('/contacts', require('./routes/contacts'))
app.use('/products', require('./routes/products'))
app.use('/vehicles', require('./routes/vehicles'))
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });