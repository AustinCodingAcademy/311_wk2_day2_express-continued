const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

app.use("/contacts", (req, res) => {
    return res.json(contacts)
})

app.get("/contacts/:id", (req, res) => {
    let id = req.params.id - 1;
    return res.json(contacts[id])
})

app.use("/vehicles", (req, res) => {
    return res.json(vehicles)
})

app.get("/vehicles/:id", (req, res) => {
    let id = req.params.id - 1;
    return res.json(vehicles[id])
})

app.use("/comments", (req, res) => {
    return res.json(comments)
})

app.get("/comments/:id", (req, res) => {
    let id = req.params.id - 1;
    return res.json(comments[id])
})

app.use("/products", (req, res) => {
    return res.json(products)
})

app.get("/products/:id", (req, res) => {
    let id = req.params.id - 1;
    return res.json(products[id])
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


