const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const comments = require('./data/comments');
const products = require('./data/products');
const app = express();

const port = process.env.PORT || 4000;

// Adding get requests
app.get('/contacts', (res, req) => {
    res.json(contacts);
});


app.get('/vehicles', (res, req) => {
    res.json(vehicles);
});


app.get('./comments', (res, req) => {
    res.json(comments);
});


app.get('./prodcuts', (res, req) => {
    res.json(products);
});


app.use(express.static('public'));
app.use(bodyParser.json());


app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
