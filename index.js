const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(router);

// Routes to get all things

app.get('/contacts', (request, response) =>{
  response.json(contacts);
})

app.get('/vehicles', (request, response) =>{
  response.json(vehicles);
})

app.get('/comments', (request, response) =>{
  response.json(comments);
})

app.get('/products', (request, response) =>{
  response.json(products);
})

// Routes to get one thing

app.get('/contacts/:id', (request, response) => {
  let id = request.params.id;
  return response.json(contacts.find(x => x._id === parseInt(id)));
})

app.get('/vehiceles/:id', (request, response) => {
  let id = request.params.id;
  return response.json(vehicles.find(x => x._id === parseInt(id)));
})

app.get('/comments/:id', (request, response) => {
  let id = request.params.id;
  return response.json(comments.find(x => x._id === parseInt(id)));
})

app.get('/products/:id', (request, response) => {
  let id = request.params.id;
  return response.json(products.find(x => x._id === parseInt(id)));
})

// Routes to create one thing

app.post('/contacts', (request, response) => {
  request.body._id = contacts.length;
  request.body._id++;
  contacts.push(request.body);
  return response.json(contacts);
})

app.post('/vehicles', (request, response) => {
  request.body._id = vehicles.length;
  request.body._id++;
  vehicles.push(request.body);
  return response.json(vehicles);
})

app.post('/comments', (request, response) => {
  request.body._id = comments.length;
  request.body._id++;
  comments.push(request.body);
  return response.json(comments);
})

app.post('/products', (request, response) => {
  request.body._id = products.length;
  request.body._id++;
  products.push(request.body);
  return response.json(products);
})


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
