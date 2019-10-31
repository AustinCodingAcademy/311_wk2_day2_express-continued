const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const data = require(../data)

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json());
app.use("../data/contacts")
app.use("../data/vehicles")
app.use("../data/comments")
app.use("../data/products")

app.get("/contacts/:id", (request,response)) => {
  res.json(contacts)
}

app.get("/vehicles/:id", (request,response)) => {
  res.json(vehicles)
}

app.get("/comments/:id", (request,response)) => {
  res.json(comments)
}

app.get("/products/:id", (request,response)) => {
  res.json(products)
}

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
