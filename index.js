const express = require("express");
const bodyParser = require("body-parser");
//const uuid = require('uuid');
const commentsRouter = require('./routes/comments');

// const contacts = require('./data/contacts');
// const products = require('./data/products');
// const vehicles = require('./data/vehicles');
//console.log(comments)
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(commentsRouter);




// app.get('/contacts',(req,res) => {
//      res.json(contacts);
//  });

// app.get('/products',(req,res) => {
//      res.json(products);
//  });

//  app.get('/vehicles',(req,res) => {
//      res.json(vehicles);
//  });
                             
 


// app.get('/contacts/:id',(req,res) => {
// const id = req.params.id;

// const contact = contacts.find(contacts => contacts._id === Number(id));

// console.log(contact);

// res.json(contact);
//  });

// //**Create express routes to create one thing */
// app.post('/contacts',(req,res) => {
//    contacts.push({
//    //_id: (counter += 1),
//    pstId: 1,
//    ...req.body
//     });
// })

// app.get('/products/:id',(req,res) => {
//      res.json(products);
//  });

//  app.get('/vehicles/:id',(req,res) => {
//      res.json(vehicles);
//  });
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
