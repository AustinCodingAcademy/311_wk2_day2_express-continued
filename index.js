const express = require("express");
const app = express()
const path = require ('path');
app.use('/',express.static('public'));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// const contactRouter = require('/routes/contact/');
// const vehicleRouter = require('/routes/vehicle');
// const commentsRouter = require('/routes/comments');
// const productsRouter = require('/routes/products');


const port = process.env.PORT || 4000;
const  vehicles = require('./data/vehicles')
app.get('/vehicles', (req,res) => {
    console.log(vehicles);
    res.json(vehicles);
})

app.get('/contact', (req,res) => {
    console.log(req.params.id);
    res.json(contacts);
})
app.get('/comments', (req,res) => {
    console.log(req.params.id);
    res.json(comments);
})
app.get('/products', (req,res) => {
    console.log(req.params.id);
    res.json(products);
})

app.get('/vehicles/:id', (req,res) => {
    console.log(vehicles);
    res.json(vehicles);
})

app.get('/contact/:id', (req,res) => {
    console.log(req.params.id);
    res.json(contacts);
})
app.get('/comments/:id', (req,res) => {
    console.log(req.params.id);
    res.json(comments);
})
app.get('/products/:id', (req,res) => {
    console.log(req.params.id);
    res.json(products);
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
