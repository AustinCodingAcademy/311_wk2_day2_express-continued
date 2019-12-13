const express = require('express');
const router = express.router();
const products = require("../data/products");
const list = require("../controllers.js")


app.get("/products", (request, response) => {
    return response.json(products);

})
app.post("/vehicles", (request,response) => {

})
app.put("/products", (request, response) => {

})
app.delete("/vehicles", (request,response) => {

})

module.exports = router; 