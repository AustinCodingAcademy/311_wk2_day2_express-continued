const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const productRoutes = require("./routes/products");
const products = require("./routes/products");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const port = process.env.PORT || 4001;

// app.use(productRoutes)
app.use(express.static('public'))

app.use(products)


// app.get("/comments", (req, res) => {
//   res.json(comments)
// })

// app.get("/comments/:id", (req, res) => {
//   res.json(comments.find(item => item._id == req.params.id))
// })

// app.post("/comments", (req, res) => {
//   const nub = {
//     _id:comments.length +1, 
//     name: req.body,
//     description: req.body,
//     postId: 1
//   }
//   comments.push(nub)
//   return res.json(nub)
// })

app.get("/contacts", (req, res) => {
  res.json(contacts)
})

app.get("/contacts/:id", (req, res) => {
  res.json(contacts.find(item => item._id == req.params.id))
})

app.post("/contacts", (req, res) => {
  const nub = {
    _id:contacts.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  contacts.push(nub)
  return res.json(nub)
})

app.get("/vehicles", (req, res) => {
  res.json(vehicles)
})

app.get("/vehicles/:id", (req, res) => {
  res.json(vehicles.find(item => item._id == req.params.id))
})

app.post("/vehicles", (req, res) => {
  const nub = {
    _id:vehicles.length +1, 
    name: req.body,
    description: req.body,
    postId: 1
  }
  vehicles.push(nub)
  return res.json(nub)
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

