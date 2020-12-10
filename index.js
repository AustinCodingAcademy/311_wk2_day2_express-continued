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

app.get("/contacts", (req, res) => {
    return res.json(contacts)
})

app.get("/contacts/:id", (req, res) => {
    let id = req.params.id - 1;
    return res.json(contacts[id])
})

app.get("/vehicles", (req, res) => {
    return res.json(vehicles)
})

app.get("/comments", (req, res) => {
    return res.json(comments)
})

app.get("/products", (req, res) => {
    return res.json(products)
})

const app = express();


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


