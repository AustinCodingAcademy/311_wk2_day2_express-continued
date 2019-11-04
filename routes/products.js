const express = require('express');
const router = express.Router();
const products = require('../data/products');


app.get('/products', function(req, res){
  res.json('../data/products')

})