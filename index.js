const express = require("express");
const bodyParser = require("body-parser");
const comments = require("./data/comments");
const contacts = require("./data/contacts");
const products = require("./data/products");
const vehicles = require("./data/vehicles");

let counter = contacts.length


const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"))
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

app.get("/comments", (res, req) => {
    res.json(comments);
})

app.get("/contacts", (res, req) => {
    res.json(contacts);
})

app.get("/vehicles", (res, req) => {
    res.json(vehicles);
})

app.get("/products", (res, req) => {
    res.json(products);
})

app.get("/comments/:id", (res, req) => {
    const id = req.params.id
    const match = comments.find(comment => comment._id == Number(id));
    res.json(comments);
    console.log(match);
})

app.get("/contacts/:id", (res, req) => {
    const id = req.params.id
    const match = contacts.find(contacts => contacts._id == Number(id));
    res.json(contacts);
    console.log(match);
    res.json(contacts);
})

app.get("/vehicles:/id", (res, req) => {
    const id = req.params.id
    const match = vehicles.find(vehicles => vehicles._id == Number(id));
    res.json(vehicles);
    console.log(match);
    res.json(vehicles);
})

app.get("/products/:id", (res, req) => {
    const id = req.params.id
    const match = products.find(products => products._id == Number(id));
    res.json(products);
    console.log(match);
    res.json(products);
})

/*
  app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
*/
app.post("/comments", (res, req) => {
    res.json(comments);
})

app.post("/contacts", (res, req) => {
    contacts.push(
        {
        _id: (counter += 1),
        postId: 1,
        req.body

        }
    )
    req.body = {

    }
    
    res.json(contacts);
})

app.post("/vehicles", (res, req) => {
    res.json(vehicles);
})

app.post("/products", (res, req) => {
    res.json(products);
})










