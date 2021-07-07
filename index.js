// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(express.static(path.join(__dirname, 'public')));

// const { contacts } = requrie('./data//contacts')
// const { vehicles } = requrie('./data//vehicles')
// const { comments } = requrie('./data//comments')
// const { products } = requrie('./data//products')

// const port = process.env.PORT || 4001;
// // app.use('/data/contacts')

// let contactsCounter = contacts.length
// let vehiclesCounter = vehicle.length
// let commentsCounter = comments.length
// let productsCounter = products.length

// //GET ALL THINGS
// app.get('/contacts',(req,res) => {
//   res.json(contacts)
// })
// app.get('/vehicles',(req,res) => {
//   res.json(vehicles)
// })
// app.get('/comments',(req,res) => {
//   res.json(comments)
// })
// app.get('/products',(req,res) => {
//   res.json(products)
// })

// //GET ONE THING
// app.get('/contacts/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   res.json(item)
// })
// app.get('/vehicles/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   res.json(item)
 
// })
// app.get('/comments/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   res.json(item)
  
// })
// app.get('/products/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   res.json(item)

// })

// //create ONE thing

// app.post('/contacts/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   req.body._id = contactsCounter += 1;
//   contacts.push(req,body)
//   res.json(item)
// })
// app.post('/vehicles/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   req.body._id = vehiclesCounter += 1;
//   vehicles.push(req,body)
//   res.json(item)
 
// })
// app.post('/comments/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   req.body._id = commentsCounter += 1;
//   comments.push(req,body)
//   res.json(item)
  
// })
// app.post('/products/:id',(req,res) => {
//   let itemId = req.body.id
//   let item = contacts.find(item => item._id === Number(itemId))
//   req.body._id = productsCounter += 1;
//   products.push(req,body)
//   res.json(item)

// })



// app.listen(port, () => {
//  console.log(`Web server is listening on port ${port}!`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const port = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/comment', require('./routes/comments'))
app.use('/contacts', require('./routes/contacts'))
app.use('/products', require('./routes/products'))
app.use('/vehicles', require('./routes/vehicles'))

app.listen(port, () => {
  console.log('Web server is listening on port ${port}!');
});