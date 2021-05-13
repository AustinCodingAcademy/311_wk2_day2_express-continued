const express = require("express");
app.use(express.static('public'));
const bodyParser = require("body-parser");

const dataContacts = require("./data/contacts");
const dataVehicles = require("./data/vehicles");
const dataComments = require("./data/comments");
const dataProducts = require ("./data/products");
const comments = require("./data/comments");

app.get('./data/comments', function (req, res) {
  res.json(comments)
});

app.get('./data/contacts', function (req, res) {
  res.json(contacts)
});

app.get('./data/vehicles', function (req, res) {
  res.json(vehicles)
});

app.get('./data/products', function (req, res) {
  res.json(products)
});

app.post('/comments', function (req, res) {
  comments.push({
    '_id': comments.length+1,
    'body': 'Hello World',
    'postId': '1',
    })  
  res.json(comments[comments.length-1])
})

app.post('/contacts', function (req, res) {
  contacts.push({
    '_id': contacts.length+1,
    'name': 'Indiana Jones',
    'occupation': 'Archaeologist',
    'avatar': "https://upload.wikimedia.org/wikipedia/en/8/8c/Indiana_Jones_and_the_Last_Crusade.png"
  })  
  res.json(contacts[contacts.length-1])
})

app.post('/products', function (req, res) {
  products.push({
    '_id': products.length+1,
    'name': 'Apples',
    'description': 'Random bag of apples',
    'rating': '3',
    'imgURL': 'https://pixabay.com/photos/apple-fruit-food-vitamins-red-hat-3313225/',
    'price': '$12.89',
    'category': 'food',
    'reviews': [{
      "description": "cute apples",
      "rating": 4
    }],
  })
  res.json(products[products.length-1])
})

app.post('/vehicles', function (req, res) {
  vehicles.push({
    '_id': vehicles.length+1,
    'imgUrl': "https://pixabay.com/images/id-1858351/",
    'year': '200ish',
    'make': 'ASTON MARTIN',
    'model': 'Modern James Bond',
    'price': '$7456.99',
    'km': 5404,
    'miles': 1102,
    'fuel': 'Gas',
    'city': 'London',
    'isNew': false,
  })  
  res.json(vehicles[vehicles.length-1])
})



// const commentRouter = require("./routers/comments");
// const contactRouter = require("./routers/contacts");
// const vehiclesRouter = require("./routers.vehicles");
// const productsRouter = require("./reouters/products");



const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

