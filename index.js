const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const { contacts } = require('./data/contacts')
const { vehicles } = require('./data/vehicles')
const { comments } = require('./data/comments')
const { products } = require('./data/products')
// const users = require('./users')
// const routes = require('./router')
const port = process.env.PORT || 4001;

// app.use(router)
app.use(express.static('public'))
app.use(bodyParser.json())

//*********CODE HERE******** */

app.get('/contacts', (req, res) => {
    
    res.json(contacts)
  })

app.get('/vehicles', (req, res) => {

    res.json(vehicles)
  })

app.get('/comments', (req, res) => {

    res.json(comments)
  })

app.get('/products', (req, res) => {

    res.json(products)
  })


  app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
