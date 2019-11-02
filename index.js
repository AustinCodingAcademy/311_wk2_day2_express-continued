const express = require("express");
// creates express app
const app = express();

// // access routes
// const comments = require('./routes/comments');
// const contacts = require('./routes/contacts');
// const products = require('./routes/products');
// const vehicles = require('./routes/vehicles');

// initializes body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// display static site
app.use(express.static('public'));

// // callingn functions?
app.get('/comments', (req, res) => {

});

app.post('/comments', (req, res) => {

});



const port = process.env.PORT || 4001;
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
