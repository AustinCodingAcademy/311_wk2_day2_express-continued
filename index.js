// const express = require("express");
// const app = express.static();
// const port = process.env.PORT || 4001;

// const { vehicles } = require("./");

var express = require('express')
var app = express()
var bodyParser = require("body-parser");

//app.use(express.static('public');
app.use(bodyParser.json());
app.get('/', (req, res)=> {
    req.body
{res.json({name:"JON"}) 

// JSON.stringify()
}})

//Code here//
//requied for  body parser//


//Part 1//
app.get('/comments', (req, res) => {
    console.log('comments' + comments)
    res.json(comments)
})
app.get('/contacts', (req, res) => {
    res.json(contacts)
})
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

app.get("/", (req, res) => {
    let id = users.filter(x => x._id == req.params.userID);
	return res.json(id[0]);
});


const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
