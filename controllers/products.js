const express = require('express')

const { products } = require('../data/products')

let productsCounter = products.length;

// Get all items
const list = (req, res) => {
  res.json(products)
}

// Get one comment
const show = (req, res) => {
  console.log(req.body)
  let itemId = req.params.id;
  let item = products.find(item => item._id === Number(itemId));
  res.json(item)
}

// Create one comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = products.find(item => item._id === Number(itemId));
  req.body._id = productsCounter += 1;
  products.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }