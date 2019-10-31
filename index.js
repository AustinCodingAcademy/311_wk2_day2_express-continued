const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const comments = require('./data/comments');
const products = require('./data/products');
const app = express();
const port = process.env.PORT || 4000;
let contCounter = contacts.length +1;
let vehCounter = vehicles.length +1;
let commCounter = comments.length +1;

app.use(express.static('public'))
app.use(bodyParser.json());


// Adding get routes
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.get('/vehicles', (req, res) => {
    res.json(vehicles);
})

app.get('/comments', (req, res) => {
    res.json(comments);
})

app.get('/products', (req, res) => {
    res.json(products);
})


// Routes to get one thing

// Contacts
app.get('/contacts/:id', (req, res) => {
    let contactId = contacts.find(x => x._id == req.params.id);
    res.json(contactId);
})

app.post('/contacts', (req, res) => {
    res.json(contacts.push({
        "_id": contCounter++,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": req.body.avatar
    }))
})


// Vehicles
app.get('/vehicles/:id', (req, res) => {
    let vehicleId = vehicles.find(x => x._id == req.params.id);
    res.json(vehicleId);
})

app.post('/vehicles', (req, res) => {
    res.json(vehicles.push({
            "_id": vehCounter++,
            "imgUrl": req.body.imgUrl,
            "year": req.body.year,
            "make": req.body.make,
            "model": req.body.model,
            "price": req.body.price,
            "km": req.body.km,
            "miles": req.body.miles,
            "fuel": req.body.fuel,
            "city": req.body.city,
            "isNew": req.body.isNew
    }))
})

// Comments
app.get('/comments/:id', (req, res) => {
    let commentsId = comments.find(x => x._id == req.params.id);
    res.json(commentsId);
})

app.post('/comments', (req, res) => {
    res.json(comments.push({
        "_id": commCounter,
        "body": req.body.body,
        "postId": req.body.postId
    }))
})

app.get('/products/:id', (req, res) => {
    let productsId = products.find(x => x._id == req.params.id);
    res.json(productsId);
})



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
