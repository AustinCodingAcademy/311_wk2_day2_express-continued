// const express = require("express");
// const app = express.static();
// const port = process.env.PORT || 4001;

// const { users } = require("./state");

var express = require('express')
var app = express()
var bodyParser = require("body-parser");

//app.use(express.static('public');

app.get('/', (req, res)=> {
    req.body
{res.json({name:"JON"}) 

// JSON.stringify()
}})

//Code here//
//requied for  body parser//
app.use(bodyParser.json());

//Part 1//
app.get("/", (req, res) => {
	return res.json(users);
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
