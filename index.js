const express = require("express");
const bodyParser = require("body-parser");
//const comments = require('./data/comments')
const contacts = require('./data/contacts')
const products = require('./data/products')
const vehicles = require('./data/vehicles')
const commentRouter = require('./routes/comments')
const app = express();

app.use(commentRouter)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
let counter = 1; 


app.get('/contacts',(req,res)=>{
  res.json(contacts)
})
app.get('/contacts/:contactId',(req,res)=>{
  let contactIdString = req.params.contactId
  let contactId = parseInt(contactIdString)
  console.log(contactId)
  for(let i = 0; i< contacts.length;i++){
    if(contacts[i]._id === contactId){
      return res.json(contacts[i])
    }
  }
})
app.post('/contacts',(req,res)=>{
  console.log(req.body)
  let user = {
    _id : 8,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar : req.body.avatar
  }
  contacts.push(user)
  for(let i = 0; i<contacts.length; i++){
    contacts[i]._id = counter + contacts.indexOf(contacts[i])
    console.log(contacts[i]._id)
  }

  return res.json(contacts)
})
app.get('/products',(req,res)=>{
  res.json(products)
})
app.get('/products/:productId',(req,res)=>{
  let productStringId = req.params.productId
  let productsId = parseInt(productStringId)
  for(let i = 0; i < products.length; i++){
    console.log(products[i]._id)
    if(products[i]._id === productsId){
      console.log(products[i])
      return res.json(products[i])
    }
  } 
})
app.post('/products',(req,res)=>{
  console.log(req.body)
  let newProduct = {
    _id : 8,
    name : req.body.name,
    description : req.body.description
  }
  console.log(newProduct)
  products.push(newProduct)
  for(let i = 0; i < products.length;i++){
   products[i]._id = counter + products.indexOf(products[i]) 
  }
  return res.json(products)
})
app.get('/vehicles',(req,res)=>{
  res.json(vehicles)
})
app.get('/vehicles/:vehiclesID',(req,res)=>{
  let vehicleStringId = req.params.vehiclesID
  let vehicleId = parseInt(vehicleStringId)
  for(let i = 0; i < vehicles.length; i++){
    if(vehicles[i]._id === vehicleId){
      return res.json(vehicles[i])
    }
  }
})
app.post('/vehicles',(req,res)=>{
  console.log(req.body)
  let newVehicle = {
    _id : 9,
    year : req.body.year,
    make : req.body.make,
    model : req.body.model
  }
  vehicles.push(newVehicle)
  for(let i =0; i< vehicles.length;i++){
    vehicles[i]._id = counter + vehicles.indexOf(vehicles[i])
  }
  return res.json(vehicles)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
})