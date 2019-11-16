const express = require("express");
const bodyParser = require("body-parser");
// const uuidv1 = require('uuid/v1');
const comments = require("./data/comments")
// const contacts = require("./data/contacts")
// const products = require("./data/products")
// const vehicles = require("./data/vehicles")

const app = express();
const port = process.env.PORT || 4000;
console.log(commentCounter);

app.use(express.static("public"));
app.use(bodyParser.json);
let commentCounter = comments.length;

app.get("/comments", (req, res) => {
    res.json(comments);
})

app.get("/comments/:id", (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment._id === Number(id));
    res.json(comment);
})

app.post("/comments", (req, res) => {
    comments.push({
        _id: commentCounter + 1,
        body: req.body.body,
        postId: 1
    })
    res.json(comments);
})
/*
let counter = contacts.length

app.use(express.static("public"));
app.use(bodyParser.json())




app.get('/comments', (req, res) => {
    res.json(comments)
})

app.get('/comments/:id', (req, res) => {
    const id = req.params.id;

    const match = comments.find(comment => comment._id === Number(id))
    res.json(match)
})

app.get('/contacts', (req, res) => {
    res.json(contacts)
})

app.get('/contacts/:id', (req, res) => {
    const id = req.params.id;

    const match1 = contacts.find(contact => contact._id === Number(id))
    res.json(match1)
})

app.post('/contacts', (req, res) => {
    contacts.push({
        _id: uuidv1,
        name: "Jerry",
        occupation: "Dead Head",
        avatar: "asfasdg"
    })
    res.json(contacts)
})


app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;

    const match2 = products.find(product => product._id === Number(id))
    res.json(match2)
})

app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})






app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});









